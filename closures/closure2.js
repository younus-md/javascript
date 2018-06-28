var param2 = 10;

var addTo = function (param1) {

    return param1 + param2;
}

console.log(addTo(3))

var param2 = 18;

console.log(addTo(4))

var sumTo = function (outer) {

    var sum = function (inner) {
        return outer + inner;
    }
    return sum;
}

var resSum = new sumTo(6)




console.dir(sumTo(5))
console.dir(resSum(6))