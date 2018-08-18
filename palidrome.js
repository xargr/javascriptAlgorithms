/* 
Palidrome

example: 
civic -> civic

put the string ->
tranfer to array with split() ->
reverse array order with reverse() ->
tranfer array to string with join() ->
the result check if match with original value

*/

function palidrome(str) {
  const newStr = str
    .split("")
    .reverse()
    .join("");

  return str === newStr;
}

module.exports = palidrome;
