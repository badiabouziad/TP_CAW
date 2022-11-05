/*function toArray(start, finish) {
  let x = [];
  for (let i = start; i <= finish; i++) {
    x.push(i);
  }
  console.log(x);
  return x;
}
toArray(1, 5);
module.exports = toArray;*/

function toArray(start, finish, step) {
  let x = [];
  for (let i = start; i <= finish; i = i + step) {
    x.push(i);
  }
  console.log(x);
  return x;
}

toArray(5, 9, 2);
module.exports = toArray;
