function applyCommands(commands, startingPosition, initialDirection) {

    // Initialize All Directions
    const directions = ["N", "E", "S", "W", "U", "D"];
    const directionIndex = { N: 0, E: 1, S: 2, W: 3, U: 4, D: 5 };

    // Return if Invalid initialDirection
    if (!directionIndex.hasOwnProperty(initialDirection)) {
        console.error(`Invalid initial direction "${initialDirection}".`);
        return;
    }

    // Initialize the current position and direction
    let currentPosition = [...startingPosition];
    let currentDirectionIndex = directionIndex[initialDirection];

    // Loop through every command and update the values
    for (const command of commands) {
        console.log(currentPosition, directions[currentDirectionIndex]);
        switch (command) {
            case "f":
                // Move forward in the x-direction (East)
                if (currentDirectionIndex === 1) currentPosition[0]++; 
                // Move forward in the y-direction (North)
                if (currentDirectionIndex === 0) currentPosition[1]++;
                // Move upward in the z-direction (Up Down)
                if (currentDirectionIndex === 4) currentPosition[2]++;
                break;
            case "b":
                // Move backward in the x-direction (West)
                if (currentDirectionIndex === 1) currentPosition[0]--; 
                // Move backward in the y-direction (South)
                if (currentDirectionIndex === 0) currentPosition[1]--;
                // Move downward in the z-direction
                if (currentDirectionIndex === 4) currentPosition[2]--;
                break;
            case "r":
                // Turn right (N -> E -> S -> W -> N)
                currentDirectionIndex = (currentDirectionIndex + 1) % 4; 
                break;
            case "l":
                // Turn left (N -> W -> S -> E -> N)
                currentDirectionIndex = (currentDirectionIndex - 1 + 4) % 4; 
                break;
            case "u":
                // Change to "Up" direction
                currentDirectionIndex = 4; 
                break;
            case "d":
                // Change to "Down" direction
                currentDirectionIndex = 5; 
                break;
            default:
                // Handle invalid command
                console.error(`Invalid command "${command}"`);
        }
    }

    // return posiition and direction
    return {
        finalPosition: currentPosition,
        finalDirection: directions[currentDirectionIndex]
    };
}


// Commands
const commands = ["f", "r", "u", "b", "l"];
const startingPosition = [0, 0, 0];
const initialDirection = "N";


