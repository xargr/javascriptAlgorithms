/* 
Callback function

A callback is a function that is to be 
executed after another function has 
finished executing — hence the name 
‘call back’.

*/

function callBack(first, second, callback) {
  console.log(first + second);
  callback();
}

callBack(2, 4, function(){
    console.log('done');
});
