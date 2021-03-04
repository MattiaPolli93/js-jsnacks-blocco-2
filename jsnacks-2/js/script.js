// Insert a number: if even print it, otherwise (uneven) print the following
// Variables
var userNumber; 

// Asking the user
do {
    userNumber = parseInt(prompt("Please insert a number:"));
} while (isNaN(userNumber));

// Calculating
if (userNumber % 2 == 0) {
    console.log(userNumber);
} else {
    console.log(userNumber + 1);
}