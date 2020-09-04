// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

const minusInput1 = document.getElementById('minus-input-1');
const minusInput2 = document.getElementById('minus-input-2');
const minusButton = document.getElementById('minus-button');
const minusSpan = document.getElementById('minus-span');

const timesInput1 = document.getElementById('times-input-1');
const timesInput2 = document.getElementById('times-input-2');
const timesButton = document.getElementById('times-button');
const timesSpan = document.getElementById('times-span');

const divideInput1 = document.getElementById('divide-input-1');
const divideInput2 = document.getElementById('divide-input-2');
const divideButton = document.getElementById('divide-button');
const divideSpan = document.getElementById('divide-span');

// console.log(sumInput1);
// console.log(sumInput2);
// console.log(sumButton);
// console.log(sumSpan);

// initialize state
sumButton.addEventListener('click', () => {
        // test with console.log(Date());

    // - Get the values of the two inputs
    const value1 = sumInput1.valueAsNumber;
    const value2 = sumInput2.valueAsNumber;
        // test with console.log(value1);
        // test with console.log(value2);

    // - Add together the VALUE of the two inputs
    const sum = value1 + value2;
        // test with console.log(sum);

    // - Inject the sum into the sum 'span'
    sumSpan.textContent = sum;
});

// set event listeners to update state and DOM

//minus button code
minusButton.addEventListener('click', () => {
const value3 = minusInput1.valueAsNumber;
const value4 = minusInput2.valueAsNumber;

// - Add together the VALUE of the two inputs
const subtract = value3 - value4;
    // test with console.log(sum);

// - Inject the sum into the sum 'span'
minusSpan.textContent = subtract;
});

//times button code
timesButton.addEventListener('click', () => {
    const value5 = timesInput1.valueAsNumber;
    const value6 = timesInput2.valueAsNumber;
    
    // - Add together the VALUE of the two inputs
    const multiply = value5 * value6;
        // test with console.log(sum);
    
    // - Inject the sum into the sum 'span'
    timesSpan.textContent = multiply;
    });

//division button code
divideButton.addEventListener('click', () => {
    const value7 = divideInput1.valueAsNumber;
    const value8 = divideInput2.valueAsNumber;
    
    // - Add together the VALUE of the two inputs
    const divide = value7 / value8;
        // test with console.log(sum);
    
    // - Inject the sum into the sum 'span'
    divideSpan.textContent = divide;
    });