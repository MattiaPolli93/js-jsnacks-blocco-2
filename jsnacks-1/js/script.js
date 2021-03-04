// Ask the user five numbers, then print the sum of all inserted numbers
// Variables
var userNumber;
var sum = 0;

// Asking the user (For)
for (var i = 0; i < 5; i++) {
    userNumber = parseInt(prompt("Hello! Please insert 5 numbers:"));
    sum += userNumber;
}

console.log(sum);



// Variables
var i = 0;
var sum = 0;
var userNumber;

// Asking the user (While)
while ( i < 5) {
    userNumber = parseInt(prompt("Hello! Please insert 5 numbers:"));
    sum += userNumber;
    ++i;
}

console.log(sum);