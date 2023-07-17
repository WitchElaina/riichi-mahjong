import ReactDOM from 'react-dom/client';

import './style.scss';

import { strToHaiArr } from './utils/tileConvert';
import { hairi } from 'syanten';

const out = strToHaiArr('6p7p77p7p8p8p2s3s6s7s15z8p');

ReactDOM.createRoot(document.getElementById('root')!).render(<>{JSON.stringify(hairi(out))}</>);
