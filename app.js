// import functions and grab DOM elements
const sumInput1 = document.getElementById('sum-input-1');
const sumInput2 = document.getElementById('sum-input-2');
const sumButton = document.getElementById('sum-button');
const sumSpan = document.getElementById('sum-span');

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