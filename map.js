/* 
Map function

The map() method creates a new array 
with the results of calling a provided 
function on every element in the calling array.

*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Classic anonymous function
const double = array1.map(function(x) {
  return x * 2;
});

// Arrow function
const doubleArrow = array1.map(x => {
  return x * 2;
});

// Fat arrow function
const doubleFatArrow = array1.map(x => x * 2);

function separate(x) {
  return x * 2;
}

// Add separate function
const doubleSep = array1.map(separate);

module.exports = {
  double,
  doubleArrow,
  doubleSep,
  doubleFatArrow
};
