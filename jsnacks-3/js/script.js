// Starting from two arrays, create a false list comprising three guests' names and surnames
// Variables and Arrays
var names = ["Luke", "Harry", "Frodo"];
var surnames = ["Skywalker", "Potter", "Baggins"];
var randomName = names[Math.floor(Math.random() * names.length)];
var randomSurname = surnames[Math.floor(Math.random() * surnames.length)];

// New Array
var falseNamesList = [];
var falseName;

// Calculating
for (var i = 1; i <= names.length && i <= surnames.length; i++) {
    // Displaying
    falseName = randomName + " " + randomSurname;
    falseNamesList.push(falseName);
}

console.log(falseNamesList);