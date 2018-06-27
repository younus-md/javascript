
//Scenario 1: Global variable not changed

// name = "undefined", name1 = 'undefined';


name = 'Syed'
//case1
var printName = function (name1) {
    console.log('....' + name1)
    name = 'Kishore';
    console.log('Inside Fun\n' + name1)
}
printName(name)
console.log('Outside Fun\n' + name)


//case 2
name = 'Partha'
//case1
var printName = function (name) {
    console.log('....' + name)
    name = 'Chris';
    console.log('Inside Fun1\n' + name)
}
printName(name)
console.log('Outside Fun1\n' + name)


// //Scenario 2:Global Variable changed
// text = 'Hello';
// function printText() {
//     text = 'Hii'
// }
// printText()
// console.log('text' + text)





