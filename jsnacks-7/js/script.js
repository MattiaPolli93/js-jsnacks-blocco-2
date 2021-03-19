// In an array of objects (football teams; properties: name - to compile, scores - set to 0, fouls - set to 0), generate random numbers instead of 0 (scores, fouls). Then create a new array inside which name and fouls are inserted. Display the newly created array in the console.

// First part
var teams = [
    {
        name: "Juventus",
        scores: 0,
        fouls: 0
    },
    {
        name: "Milan",
        scores: 0,
        fouls: 0
    },
    {
        name: "Inter",
        scores: 0,
        fouls: 0
    }
];

// Second part
for (var i = 0; i < teams.length; i++) {
    teams[i].scores = randomNumber(0, 10);
    teams[i].fouls = randomNumber(0, 10);
}

// Third part
var teamFouls = [];

for (var i = 0; i < teams.length; i++) {
    teamFouls.push({
        name: teams[i].name, fouls: teams[i].fouls
    });
}

// Displaying
console.log(teamFouls);