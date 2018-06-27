var name = 'Dravid';
function showName() {
    if (true) {
        name = 'Syed'
        console.log('Inout func \n' + name)
    }
    return function inner() {
        console.log('inner' + name)
        name = 'Partha'
    }
}
console.log('before func called \n' + name)
showName()

console.log('After func called\n' + name)
showName()();
console.log('After func \n' + name)


//setTimeout Variables are Executed in the Global Scope
