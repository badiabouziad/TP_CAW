let notes = [12, 14, 11, 12, 08];
let s = 0;
let x = function moyenne() {
  for (let i = 0; i < notes.length; i++) {
    s = s + notes[i];
  }
  m = s / notes.length;
  console.log(m);
};
x();
module.exports = x;

