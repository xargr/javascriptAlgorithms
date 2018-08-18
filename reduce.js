/* 
Reduce function

The reduce() method applies a function 
against an accumulator and each element 
in the array (from left to right) to reduce 
it to a single value.

*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Sum values from array
const total = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

// Sum of values in an object array
const initialValue = 0;
const sumOfObj = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(function(
  accumulator,
  currentValue
) {
  return accumulator + currentValue.x;
},
initialValue);

// Flatten array
const flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  (accumulator, currentValue) => accumulator.concat(currentValue),
  []
);

module.exports = {
  total,
  sumOfObj,
  flattened
};
