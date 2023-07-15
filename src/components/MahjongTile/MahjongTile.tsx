/***
 * MahjongTile.tsx
 * @author WitchElaina
 * @description A component for a single Mahjong tile
 */
import './style.scss';

interface MahjongTileProps {
  tile: MahjongTile;
  darkMode: boolean;
  isDora: boolean;
  width?: string;
}

interface TileMapping {
  m: string;
  p: string;
  s: string;
}

const convertTileStr = (tile: MahjongTile) => {
  /**
   * Convert a MahjongTile str to a SVG file str
   *  The SVG is from https://github.com/FluffyStuff/riichi-mahjong-tiles, whose file name like "/Black/Man1.svg", different from the decalaration of MahjongTile.
   * @param tile The MahjongTile to convert
   */
  const tileMapping: TileMapping = {
    m: 'Man',
    p: 'Pin',
    s: 'Sou',
  };
  const jihaiArray = ['', 'Ton', 'Nan', 'Shaa', 'Pei', 'Haku', 'Hatsu', 'Chun'];

  let tileStr = '';
  if (tile[1] === 'z') {
    tileStr = jihaiArray[tile[0] as keyof typeof jihaiArray] as string;
  } else {
    // if aka dora
    if (tile[0] === '0') {
      tileStr = tileMapping[tile[1] as keyof TileMapping] + '5-Dora';
    } else {
      tileStr = tileMapping[tile[1] as keyof TileMapping] + tile[0];
    }
  }

  return tileStr;
};

export const MahjongTile: React.FC<MahjongTileProps> = ({
  tile,
  darkMode,
  isDora,
  width = '6rem',
}) => {
  // get SVG file path
  const tileStr = convertTileStr(tile);
  const svgPath = `assets/${darkMode ? 'Black' : 'Regular'}/${tileStr}.svg`;
  // const backgroundPath = `assets/${darkMode ? 'Black' : 'Regular'}/Front.svg`;
  const backgroundColor = darkMode ? '#000' : 'rgb(255, 247, 238)';
  // set isDora to true if the tile is aka dora, which is 0m, 0p and 0s
  if (tile[0] === '0') {
    isDora = true;
  }
  return (
    <div className="tile-wrapper" style={{ width }}>
      <div className="tile-border" />
      <div className="tile-background" style={{ backgroundColor }}>
        {/* <img src={backgroundPath} alt="tile background" draggable="false" /> */}
      </div>
      <div className="tile-name">
        <img src={svgPath} alt={tile} draggable="false" />
      </div>
      {isDora && <div className="tile-dora-layer" />}
    </div>
  );
};
