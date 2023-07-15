import ReactDOM from 'react-dom/client';

import './style.scss';

import { MahjongTile } from './components/MahjongTile/MahjongTile';

const tileClass = ['m', 'p', 's'];

const tileNum = ['1', '2', '3', '4', '5', '0', '6', '7', '8', '9'];
const jihaiNum = ['1', '2', '3', '4', '5', '6', '7'];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {tileClass.map((tileClass) => (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          {tileNum.map((tileNum) => (
            <MahjongTile tile={tileNum + tileClass} darkMode={false} isDora={false} />
          ))}
        </div>
      ))}

      <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
        {jihaiNum.map((jihaiNum) => (
          <MahjongTile tile={jihaiNum + 'z'} darkMode={false} isDora={false} />
        ))}
      </div>
    </div>
  </>,
);
