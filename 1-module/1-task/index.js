function factorial(n) {
  let factorialInt = 1;
  for (let i = 1; i <= n; i++) {
    factorialInt *= i;
  }
  return factorialInt;
}
