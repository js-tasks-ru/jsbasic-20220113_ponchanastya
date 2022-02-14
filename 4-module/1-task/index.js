function makeFriendsList(friends) {
  const nameArray = friends.map((el) => `${el.firstName} ${el.lastName}`);
  const ul = document.createElement('ul');
  for (let name of nameArray) {
    const li = document.createElement('li');
    li.textContent = name;
    ul.append(li);
  }
  return ul;
}