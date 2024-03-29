function naiveSearch(long, short) {
  const table = buildKMPTable(short);
  let count = 0;

  let i = 0; // index for long[]
  let j = 0; // index for short[]
  while (i < long.length) {
    if (short[j] === long[i]) {
      i++, j++;
    }
    if (j === short.length) {
      count++;
      j = table[j - 1];
    } else if (i < long.length && short[j] !== long[i]) {
      if (j !== 0) j = table[j - 1];
      else i++;
    }
  }

  return count;
}

function buildKMPTable(short) {
  const table = new Array(short.length).fill(0);
  let length = 0; // length of the previous longest prefix suffix

  for (let i = 1; i < short.length; ) {
    if (short[i] === short[length]) {
      length++;
      table[i] = length;
      i++;
    } else {
      if (length !== 0) length = table[length - 1];
      else i++;
    }
  }

  return table;
}

console.log(naiveSearch('lorie loled', 'lo')); // 输出 2
console.log(naiveSearch('hello world', 'll')); // 输出 1
console.log(naiveSearch('aaa aa aa a', 'aa')); // 输出 4
console.log(naiveSearch('abcabcabc', 'abc')); // 输出 3
console.log(naiveSearch('abcabcabc', 'd')); // 输出 0
