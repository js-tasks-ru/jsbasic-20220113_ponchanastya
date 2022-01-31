function camelize(str) {
  const arr = str.split('-');
  let modifArr = [ arr[0] ];
  for (let i = 1 ; i < arr.length; i++) {
    const upper = arr[i][0].toUpperCase() + arr[i].slice(1);
    modifArr.push(upper);
  }
  return modifArr.join('');
}