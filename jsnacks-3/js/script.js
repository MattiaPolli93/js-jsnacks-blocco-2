// Starting from two arrays, create a false list comprising the three guests' names and surnames
// Variables and Arrays
var names = ["Luke", "Harry", "Frodo"];
var surnames = ["Skywalker", "Potter", "Baggins"];
var falseNamesList = [];
var falseName;

// Calculating
for (var i = 1; i <= 3; i++) {
    // Random
    var randomName = Math.floor(Math.random() * names.length);
    var randomSurname = Math.floor(Math.random() * surnames.length);
    // Complete false names
    falseName = (names[randomName] + " " + surnames[randomSurname]);
    falseNamesList.push(falseName);
}

// Displaying
console.log(falseNamesList);