/* 
Vowels function

The vowels are a, e, i, u, o .
Create function than take 
string and return
the number of vowels

*/

function vowels(str) {
  let counter = 0;
  const vowels = "aeiuo";

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      counter++;
    }
  }
  return counter;
}

module.exports = vowels;
