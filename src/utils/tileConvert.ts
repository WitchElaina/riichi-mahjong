/**
 * tileConvert.ts
 *
 */
import { HaiArr } from 'syanten';

export const strToHaiArr = (str: string): HaiArr => {
  // init HaiArr
  const haiArr: HaiArr = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // m
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // p
    [0, 0, 0, 0, 0, 0, 0, 0, 0], // s
    [0, 0, 0, 0, 0, 0, 0], // z
  ];

  const typeToIndex: { [key: string]: number } = {
    m: 0,
    p: 1,
    s: 2,
    z: 3,
  };

  const reg = /\d+[mps]|[1-7]+z/g;

  while (true) {
    const result = reg.exec(str);
    if (result === null) {
      break;
    }

    const hai = result[0];
    const num = hai.slice(0, -1);
    const type = hai.slice(-1);

    num.split('').forEach((n) => {
      if (n === '0') {
        n = '5';
      }
      haiArr[typeToIndex[type]][Number(n) - 1] += 1;
    });
  }
  return haiArr;
};
