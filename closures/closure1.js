//Example 1: 
//Logically, a closure is formed if an inner function closes over some variables from the outer scopes. Whether memory is actually claimed in the cases you described depends on the JavaScript engine.
function outer(a) {
    console.log('Inside Outer')
    var b = 20;
    function inner(c) {
        console.log('Inside Inner')
        var d = 40;
        var res = a * b / (d + c);
        function subInner(e) {
            console.log('Inside subInner')
            return res + e
        }
        return subInner
    }
    return inner;
}

var x = outer(10);
var y = x(30);
var z = y(12)
console.log(`Final Result ${z}`)

//Example 2:
var confData = (function () {
    var accountbal = 3000;
    return {
        accbal: function () {
            console.log(accountbal)
            return accountbal * 10;
        }
    }
})();

module.exports = confData.accbal()



// More Ref: https://mrale.ph/blog/2012/09/23/grokking-v8-closures-for-fun.html
