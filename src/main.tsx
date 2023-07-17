import ReactDOM from 'react-dom/client';

import './style.scss';

import { MahjongTileArray } from './components/MahjongTileArray';

const tileArray = [
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
] as MahjongTile[];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <MahjongTileArray tileArray={tileArray} darkMode={false} isDora={false} />
  </>,
);
