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
    s === num && s !== 0 ? console.log('Perfect number') : console.log('NOT a perfect number');
};
isPerfect(28);