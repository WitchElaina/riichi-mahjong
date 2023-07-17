/***
 * MahjongTileArray
 * @author WitchElaina
 * @description A component for a Mahjong tile array
 */
import { MahjongTile } from '../MahjongTile';

import './style.scss';

interface MahjongTileArrayProps {
  tileArray: MahjongTile[];
  darkMode: boolean;
  isDora: boolean;
  width?: string;
  is3d?: boolean;
}

export const MahjongTileArray: React.FC<MahjongTileArrayProps> = (props) => {
  const { tileArray, darkMode, isDora, width, is3d } = props;
  return (
    <div className="mahjong-tile-array">
      {tileArray.map((tile, index) => {
        return (
          <MahjongTile
            tile={tile}
            darkMode={darkMode}
            isDora={isDora}
            width={width}
            is3d={is3d}
            key={index}
          />
        );
      })}
    </div>
  );
};
