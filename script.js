
//operation functions
const addNum = (a,b) => (a + b);
const subtractNum = (a,b) => (a - b);
const multNum = (a,b) => (a * b);
const divNum = (a,b) => (a/b);
const raisePowerToNum = (a,b) => (a**b);

//operate function
function operate(operation, a, b) {
    let numA = parseInt(a);
    let numB = parseInt(b)
    if (operation === '+') {
        return addNum(numA, numB)
    } else if (operation === '-') {
        return subtractNum(numA, numB)
    } else if (operation === 'x') {
        return multNum(numA, numB)
    } else if (operation === '/') {
        return divNum(numA, numB)
    } else if (operation === '^') {
        return raisePowerToNum(numA, numB)
    }
}

//display numbers
let display = document.getElementById("display");

//display number buttons
let numBtns = document.querySelectorAll("#number-container button");

numBtns.forEach(button => {
    button.addEventListener('click', (e) => {
        display.textContent += (button.textContent)
    })
})

//display operator buttons
let operatorBtns = document.querySelectorAll("#operator-container #operators button");
let calculate = document.querySelector("#calculate")

operatorBtns.forEach(button => {
    button.addEventListener('click', () => {
        display.textContent += (' ' + button.textContent + ' ')
    })
})

calculate.addEventListener('click', () => {
    let contentArray = display.textContent.split(" ");
    let result = operate(contentArray[1], contentArray[0], contentArray[2])
    display.textContent = result
})




//testing vvv
/*
let num1 = parseInt(prompt())
let num2 = parseInt(prompt())
let choice = prompt()

console.log(operate(choice, num1, num2))*/