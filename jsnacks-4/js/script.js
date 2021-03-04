// Print the sum of all items (integer numbers) on uneven positions
// Array (integer numbers)
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Variables
var i = 0;
var uneven = false;
var sum = 0;

// Calculating
while (i < numbers.length) {
    if (i % 2 == 1) {
        uneven = true;
        sum += numbers[i];
    }
    ++i;
}

// Displaying
console.log(sum);