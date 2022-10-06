// 1) Multiplied range of numbers
const minVal = +prompt('Enter min value from 1 to 10');
const maxVal = +prompt('Enter max value from 1 to 10');
const pow = (minVal, maxVal) => {
    let sum = 0;

    if (maxVal > 10 || minVal < 1 || isNaN(minVal) || isNaN(maxVal)) {
        console.log('Enter correct value');
    } else {
        for (let i = minVal; i <= maxVal; i++) {
            sum += i * (i + 1);
        }
        console.log(`Multiplied values in range from ${minVal} to ${maxVal} = ${sum}`);
    }
};

pow(minVal, maxVal);

// 2) Calc Area
const calcArea = (a, b = 0) => console.log(b === 0 ? `Calculated square area ${a * 4}` :
    `Calculated rectangle area ${a * b}`);

calcArea(15, 10);
calcArea(5);

// 3) Perfect numbers
const isPerfect = (num) => {
    let s = 0;

    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            s += i;
        }
    }
    s === num && s !== 0 ? console.log(`${num} is a PERFECT number`) : console.log(`${num} is NOT a perfect number`);
};

isPerfect(6);

// LMS Tasks
// Min
// 2) Create function which return number of arguments
const returnArgsNumber = (...args) => {
    const arr = [];
    arr.push(...args);
    console.log(`Number of arguments in function: ${arr.length} arguments`);
};

returnArgsNumber(5, 6, 7, 8, 9, 10, 12);

// 3) Create function which will compare two numbers
const compareFn = (numOne, numTwo) => {
    numOne < numTwo ? console.log(-1) : numOne > numTwo ? console.log(1) : numOne === numTwo ? console.log(0) : console.log('Some problem happened...');
};

compareFn(5, 10);
compareFn(15, 5);
compareFn(1, 1);

// 4) Factorial function
const factorial = (n) => n === 1 ? 1 : n * factorial(n - 1);

console.log('Factorial of 5: ' + factorial(5));
console.log('Factorial of 10: ' + factorial(10));

// 5) Create function that allows three digits and joins them to one
const joinDigits = (a, b, c) => {
    let str = a.toString() + b + c;
    console.log(`Result of joining digits is: ${str}`);
};

joinDigits(1, 4, 6);

// Normal
// 2) Create a function which returns only perfect digits of range
const minValPerfect = +prompt('Perfect Numbers\nEnter min value');
const maxValPerfect = +prompt('Perfect Numbers\nEnter max value');
const checkForPerfect = (minValPerfect, maxValPerfect) => {
    for (let i = minValPerfect; i <= maxValPerfect; i++) {
        isPerfect(i);
    }
};

checkForPerfect(minValPerfect, maxValPerfect);