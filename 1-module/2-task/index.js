const invalidNameFormat = (name) => name === null || name.trim().split(' ').length > 1 || name.length < 4;

function print(text) {
  console.log(text);
}

function isValid(name) {
  if (!invalidNameFormat(name)) {
    return true; 
  } else {
    return false;
  }
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
