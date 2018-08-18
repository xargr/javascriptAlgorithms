/* 
Reverse string 

put the string                      ->
tranfer to array with split()       ->
reverse array order with reverse()  ->
tranfer array to string with join()


*/

function reserveStr(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

module.exports = reserveStr;
