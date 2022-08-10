
//operation functions
const addNum = (a,b) => (a + b);
const subtractNum = (a,b) => (a - b);
const multNum = (a,b) => (a * b);
const divNum = (a,b) => (a/b);
const raisePowerToNum = (a,b) => (a**b);

//operate function
function operate(operation, a, b) {
    if (operation === '+') {
        return addNum(a,b)
    } else if (operation === '-') {
        return subtractNum(a,b)
    } else if (operation === '*') {
        return multNum(a,b)
    } else if (operation === '/') {
        return divNum(a,b)
    } else if (operation === '^') {
        return raisePowerToNum(a,b)
    }
}

//testing vvv

let num1 = parseInt(prompt())
console.log(typeof num1)
let num2 = parseInt(prompt())
let choice = prompt()

console.log(operate(choice, num1, num2))