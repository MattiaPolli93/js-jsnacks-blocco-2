// In an array of objects (bikes), display the lightest one
var bikes = [
    bike1 = {
        name: "Santa Cruz",
        weight: 4000
    },
    bike2 = {
        name: "Trek",
        weight: 3000
    },
    bike3 = {
        name: "Merida",
        weight: 2500
    }
];

var lightBike = bikes[0];

for (var i = 0; i < bikes.length; i++) {

    if (bikes[i].weight < (lightBike.weight)) {
    lightBike = bikes[i];
    }
}

console.log(lightBike);