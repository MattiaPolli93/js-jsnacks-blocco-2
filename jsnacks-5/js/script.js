// Create two arrays with a different number of items. Add random items to the array with fewer items, until their number of items will be the same
// Arrays and variables
var firstArray = [3, 6, 7, 33, 66, 78, 89, 98, 100, 120];
var secondArray = [900, 786, 654, 432];
var i = secondArray.length;
var randomNumber;

// Displaying arrays
console.log(firstArray);
console.log(secondArray);

// Calculating
while (secondArray.length < firstArray.length) {
    randomNumber = Math.ceil(Math.random() * 100);
    secondArray.push(randomNumber);
    ++i;
}

// Displaying updated second array
console.log(secondArray);