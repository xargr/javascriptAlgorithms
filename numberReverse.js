/* 
Reverse number 

example: 
54 -> 45
1000 -> 1
-32 -> -23 

put the number ->
tranfer to string with toString() ->
tranfer to array with split() ->
reverse array order with reverse() ->
tranfer array to string with join() ->
the result tranfer to integer with parseInt ->
get the sign of the original number with Math.sign()
and multiple in order to add the original sign

*/

function reserveNum(num) {
  const newNum = num
    .toString()
    .split("")
    .reverse()
    .join("");

  return parseInt(newNum) * Math.sign(num);
}

module.exports = reserveNum;
