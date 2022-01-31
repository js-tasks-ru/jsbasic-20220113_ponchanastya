function getMinMax(str) {
  const array = str.split(' ');
  const numbers = array.filter((el) => Number(el))
                      .map((el) => Number(el))
                      .sort( (a, b) => a - b );
  return {
    min: numbers[0],
    max: numbers[numbers.length - 1]
  }
}