import ReactDOM from 'react-dom/client';

import './style.scss';

import { MahjongTileArray } from './components/MahjongTileArray';

const tiles: MahjongTile[] = [
  '1m',
  '9m',
  '1p',
  '9p',
  '1s',
  '9s',
  '1z',
  '2z',
  '3z',
  '4z',
  '5z',
  '6z',
  '7z',
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <MahjongTileArray tileArray={tiles} darkMode={true} isDora={true} width="50px" is3d={true} />
    <MahjongTileArray tileArray={tiles} darkMode={false} isDora={true} width="50px" is3d={true} />
  </>,
);
