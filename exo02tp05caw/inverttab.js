/*function reverseArr(myArr) {
  var newArray = new Array();
  for (var i = myArr.length - 1; i >= 0; i--) {
    newArray.push(myArr[i]);
  }
  return newArray;
}

let a = [1, 2, 3, 5, 7, 8, 9, 10];
let b = reverseArr(a);
console.log(b);*/

function reverseArr(originalArray) {
  let leftIndex = 0;
  let rightIndex = originalArray.length - 1;

  while (leftIndex < rightIndex) {
    let temp = originalArray[leftIndex];
    originalArray[leftIndex] = originalArray[rightIndex];
    originalArray[rightIndex] = temp;

    leftIndex++;
    rightIndex--;
  }
  return originalArray;
}
let a = [1, 2, 3, 5, 7, 8, 9, 10];
reverseArr(a);
console.log(a);

module.exports = reverseArr;
