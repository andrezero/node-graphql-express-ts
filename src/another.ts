'use strict';

function foo (arr: number[] = []) {
  return arr.reduce((acc: number, num: number) => acc + num, 0);
}

export default foo;
