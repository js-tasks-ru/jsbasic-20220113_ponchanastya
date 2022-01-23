/**
 * Решение 1 (проверяется тестами)
 */
function isEmpty(obj) {
  let keys = [];
  for (key in obj) {
    keys.push(key);
  }
  return keys.length === 0;
};

/**
 * Решение 2
 */
function isEmptyAlternative(obj) {
  let keys = Object.keys(obj);
  return keys.length === 0;
};
