function boyerMooreSearch(long, short) {
  const badChar = buildBadCharTable(short);
  let count = 0;

  let i = 0;
  while (i <= long.length - short.length) {
    let j = short.length - 1;
    while (j >= 0 && short[j] === long[i + j]) j--;

    if (j < 0) {
      count++;
      i += short.length - badChar[long[i + short.length]] || short.length;
    } else {
      i += Math.max(1, j - badChar[long[i + j]]);
    }
  }

  return count;
}

function buildBadCharTable(short) {
  const table = {};
  for (let i = 0; i < short.length - 1; i++) {
    table[short[i]] = i;
  }
  return table;
}
