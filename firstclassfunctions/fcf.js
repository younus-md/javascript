
//Scenario 1
function greet(name) {
    return 'Hello ,' + name;
}
// Invoking a function
console.log(greet('Syed'))
// Assigning function value to a varibale
var greets = greet('Arun')
console.log(greets)
// Assigning function def to a varibale and invoking a variable with ()
var someMsg = greet
console.log(someMsg('Kishore'))

function square(x) {
    return x * x;
}

//Scenario 2:
var array = [1, 3, 5, 7, 9]
function processResult(func, arr) {
    console.log('function', func)

    var result = [];
    for (i = 0; i < arr.length; i++) {
        //function is executed here 
        result.push(func(i))
    }
    return result;
}

var ress = processResult(square, array);
console.log('result' + ress)


//Scenario 3: Return a function & invoke in end
function logger(msg) {
    console.log('msg')

    function logmsg() {
        console.log('Hi', msg)
    }
    return logmsg;
}

var msg = logger;
msg('syed')();



