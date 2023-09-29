/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function addNumbers() {
    const firstNumber = Number(document.querySelector('#add1').value);
    const secondNumber = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(firstNumber, secondNumber);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */

const substract  = function (firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

const subtractNumbers = function () {
    const firstNumber = Number(document.querySelector('#subtract1').value);
    const secondNumber = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = substract(firstNumber, secondNumber);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */

const multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;

const multiplyNumbers = () => {
    const firstNumber = Number(document.querySelector('#factor1').value);
    const secondNumber = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(firstNumber, secondNumber);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */

const divide = (dividend, divisor) => dividend / divisor;

const divideNumbers = () => {
    const dividend = Number(document.querySelector('#dividend').value);
    const divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

const currentDate = new Date().getFullYear();

document.querySelector('#year').innerHTML = currentDate;

/* ARRAY METHODS - Functional Programming */

const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */

document.querySelector('#array').innerHTML = numbersArray;

/* Output Odds Only Array */

document.querySelector('#odds').innerHTML = numbersArray.filter(it => it % 2 != 0);

/* Output Evens Only Array */

document.querySelector('#evens').innerHTML = numbersArray.filter(it => it % 2 == 0);

/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((a, b) => a + b, 0);

/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(it => it * 2);

/* Output Sum of Multiplied by 2 Array */

document.querySelector('#sumOfMultiplied').innerHTML = numbersArray.map(it => it * 2).reduce((a, b) => a + b, 0);

