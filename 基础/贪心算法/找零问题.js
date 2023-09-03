function coinChange(coins, amount) {
  coins.sort((a, b) => b - a);
  let count = 0;

  for (let coin of coins) {
    while (amount >= coin) {
      amount -= coin;
      count++;
    }
  }

  return amount === 0 ? count : -1;
}
