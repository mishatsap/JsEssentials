// 1.2 min and max values of array.

function  check(arr){
var max;
var min;
max =  Math.max(...arr );
min =  Math.min(...arr );
console.log(`{max: ${max}, min: ${min}}`)

console.log('{min :', min , 'max:', max, '}')

}

check([1, 23, -5, 11]);