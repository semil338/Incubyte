const calculatePoints = require("./calculatePoints");

// Commands
const commands = ["f", "r", "u", "b", "l"];
const startingPosition = [0, 0, 0];
const initialDirection = "N";


const result = calculatePoints(commands, startingPosition, initialDirection);

if (result) {
    console.log(result);
}
