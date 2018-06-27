var array = [1, 2, 3, 4, 5, 'syed', true, false, null, { name: 'Rahul' }]
var arr1 = [2, 33, 3, 3, 4, 25, 6, 2, 5]
console.log('Length:' + array.length)
console.log(typeof array)
console.log('fisrt' + array[0])
console.log('last' + array[array.length - 1])
var obj = {};
console.log(typeof (obj))
var bool = false;
var name = '';
console.log(typeof (bool))
//checks type of array elements
for (i = 0; i < array.length; i++) {
    console.log(typeof (array[i]))
    if (typeof array[i] === 'object') {
        console.log('contents of object \n' + JSON.stringify(array[i]))
    } else if (typeof array[i] === 'string') {
        console.log('String\n' + array[i])
    } else if (typeof array[i] !== NaN) {
        console.log('Number\n' + array[i])
    } else if (typeof array[i] === 'boolean') {
        console.log('Boolean\n' + array[i])
    }
}
console.log(typeof (null))
var unique = []
var count = 0;
// get the unique elements
for (var i = 0; i < arr1.length; i++) {
    for (var j = i + 1; j < arr1.length; j++) {
        console.log(arr1[i], arr1[j])
        if (arr1[i] == arr1[j]) {
            count++;
            console.log(arr1[i]);
            delete arr1[i]
        }
    }
}
console.log('count of duplicate elems' + count)
for (var i = 0; i < arr1.length; i++) {
    if (typeof arr1[i] !== 'undefined') {
        unique.push(arr1[i])
    }
}
console.log(arr1)
console.log('unique\n' + unique)
console.log(Array.from('syed123')); // 's','y','e','d','1','2','3' i.e creates a new array instance

var newArr = [2, 3, 5, 6, 7, 's', 'y'];
res = Array.from(newArr, function (newArr) {
    return newArr * 2;
})

console.log('res' + res) // 4,6,10,12,14,NaN,NaN
console.log(Array.of(6, 's')) //[6,'s']
console.log(Array(5)) // [,,,,,]


var ar1 = ['a', '', 'c'];
var ar2 = ['d', 'e', 'f'];

console.log(ar1.concat(ar2));


// --------------------------------------copywithin -----------------------------------------
// wont change array size

// It simply shallow copies part of an array to another location in same array and returns it, without modifying its size
//(target, start, end) but array is modified
var ar1 = [11, 10, 9, 8, 7, 6, 5, 4, 3, 2];
var arr2 = ['a', 'b', 'c', 'd', 'e']

console.log('Berfore copy within')
for (var i = 0; i < ar1.length; i++) {
    console.log(i, ar1[i])
}
console.log('After copy within')
// console.log(ar1.copyWithin(3, 0, 4))
console.log(ar1.copyWithin(3, 0))
for (var i = 0; i < ar1.length; i++) {
    console.log(i, ar1[i])
}
var ar1 = [4, 5, 6, 7, 8, 9, 20, 11];
var someArr = [1, 2, 3, 4, 5, 6, 7, 'syed']
console.log('hii', someArr.copyWithin(3)) //  copies till end but will eleminates last elements of the array till the length is adjusted 
var array1 = ['\n', 0, 'i', 32, 'syed', null, { name: 'yns' }]
console.log(array1)
console.log(array1.copyWithin(2, 0, 9)) // [\n 0 \n 0 i 32 syed]
console.log(array1.copyWithin(0)) // [\n 0 \n 0 i 32 syed]
console.log(array1.copyWithin(3, 2)) //[\n 0 \n \n 0 i 32]
console.log(array1.copyWithin(-1, 0, -2))


var sum = function (a) {
    return a + a;
}
var diff = function (b, c) {
    if (typeof b != NaN && typeof c != NaN) {
        if (b > c) {
            return b - c
        } else if (b == c) {
            return 0;
        } else {
            return c - b
        }
    }
}
var complexArray = [{}, 5, { 3: 7 }, { 1: 56 }, sum(5), diff(i, i * i)]
console.log('Before Concat' + complexArray)
// --------------------Concat-----------------------
// wont change the array

console.log('Concat', complexArray.concat(array))



























