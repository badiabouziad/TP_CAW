let arr1 = ["a", "a", "a", "b", "b", "b", "b", "c", "c", "c"];

var most = 1;
var m = 0;
var item;
for (var i = 0; i < arr1.length; i++) {
  for (var j = 0; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) m++;
    if (most < m) {
      most = m;
      item = arr1[i];
    }
  }
  m = 0;
}
console.log(item + " ( " + most + " fois ) ");
console.log(arr1.indexOf(item));
