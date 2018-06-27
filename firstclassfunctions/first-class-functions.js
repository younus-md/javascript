
function sayHello(a, b) {
    console.log('sum \n', a + b)
    return function (a) {
        console.log("Hello!"
            + a);
        return function () {
            console.log("Syed!");
        }
    }
}
sayHello(20, 30)(30)(30);

// In js function are values



//ex.1

function square(input) {
    return input * input;
}
var res = square(5);

//or

var res = square
res(6);

console.log(square)
console.log(res);

var triple = function tripe(x) {
    return x * 3;
}


var getRes = triple;
getRes(4)

console.log('res' + getRes(4))














var emp = [{ name: 'Syed', dept: 'dev' },
{ name: 'Rahul', dept: 'qa' },
{ name: 'Ravi', dept: 'dev' },
{ name: 'Kishore', dept: 'dev' },
{ name: 'Ameer', dept: 'qa' }]



//using for loop
// var devs = []
// for (var i = 0; i < emp.length; i++) {
//     if (emp[i].dept === 'dev') {
//         devs.push(emp[i])
//     }
// }
// console.log('developers' + JSON.stringify(devs));

var dev = emp.filter(function (emp) {
    return emp.dept === 'dev'
});
console.log(JSON.stringify(dev));



var isDev = function (emp) {
    return emp.dept === 'dev'
}

var devss = emp.filter(isDev)
console.log(JSON.stringify(devss))


// var notDev=emp.


var names = []

for (var i = 0; i < emp.length; i++) {
    names.push(emp[i].name)
}

console.log('names \n' + names)

var empNames = emp.map(function (emp) {
    return emp.name
})
console.log('empNames \n' + JSON.stringify(empNames))


var orders = [{ amount: 250 }, { amount: 340 }, { amount: 339 }]


total = orders.reduce(function (sum, order) {
    console.log(sum, order)
    return sum + order.amount

}, 0)


var students = [{
    name: 'syed',
    age: 26,
    gender: 'm'

}, {}]






// var names = emp.map(




