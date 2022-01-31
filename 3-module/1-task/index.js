/**
 * Решение 1 
 */
function namify(users) {
  let arrayOfNames = [];
  for (let user of users) {
    arrayOfNames.push(user.name);
  }
  return arrayOfNames;
};

/**
 * Решение 2 
 */
function namifyMap(users) {
  return users.map((user) => user.name);
};