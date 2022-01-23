const isInt = (value) => typeof value === 'number' && isFinite(value);

/**
 * Решение 1 (проверяется тестами)
 */
function sumSalary(salaries) {
  let salary = 0;
  for (key in salaries) {
    if (isInt(salaries[key])) {
        salary += salaries[key];
    }
  }
  return salary;
};

/**
 * Решение 2
 */
 function sumSalaryAlternative(salaries) {
  const filteredValues = Object.values(salaries).filter(isInt);
  return filteredValues.length > 0 ? filteredValues.reduce( (a, b) => a + b) : 0;
};