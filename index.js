function applyCommands(commands, startingPosition, initialDirection) {

    // Initialize All Directions
    const directions = ["N", "E", "S", "W", "U", "D"];
    const directionIndex = { N: 0, E: 1, S: 2, W: 3, U: 4, D: 5 };

    // Return if Invalid initialDirection
    if (!directionIndex.hasOwnProperty(initialDirection)) {
        console.error(`Invalid initial direction "${initialDirection}".`);
        return;
    }

  
}


// Commands
const commands = ["f", "r", "u", "b", "l"];
const startingPosition = [0, 0, 0];
const initialDirection = "N";

