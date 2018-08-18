/* 
Filter function

The map() method creates a new array with 
the results of calling a provided function 
on every element in the calling array.

*/

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Classic anonymous function
const upTo = array1.filter(function(x) {
  return x > 2;
});

// Arrow function
const dupToArrow = array1.filter(x => {
  return x > 2;
});

// Fat arrow function
const upToFatArrow = array1.filter(x => x > 2);

function separate(x) {
  return x > 2;
}

// Add separate function
const upToSep = array1.filter(separate);

module.exports = {
  upTo,
  dupToArrow,
  upToFatArrow,
  upToSep
};
