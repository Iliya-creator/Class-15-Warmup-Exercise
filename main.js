// Warm Up Exercise
// Given the empty array.

let numbers = [];
// Push numbers 0 - 50 into this array. Use the push method to do this.
// Hint. Using a loop will be a good use case in this scenario.
// Use the built in array method filter to filter out even numbers of the array.

// From there, add each and every number from the array.

let newArr = [];
    numbers.filter((value)=> {
        value % 2 ==0;
    })
