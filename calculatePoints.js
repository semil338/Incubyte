
function calculatePoints(commands, startingPosition, initialDirection) {

    // Initialize All Directions
    const directions = ["N", "E", "S", "W", "U", "D"];
    const directionIndex = { N: 0, E: 1, S: 2, W: 3, U: 4, D: 5 };

    // Return if Invalid initialDirection
    if (!directionIndex.hasOwnProperty(initialDirection)) {
        return (`Invalid initial direction "${initialDirection}".`);
    }

    // console.log(directions.findIndex(value => value === initialDirection));

    // Initialize the current position and direction
    let currentPosition = [...startingPosition];
    let currentDirectionIndex = directions.findIndex(value => value === initialDirection);

    // Loop through every command and update the values
    for (const command of commands) {
        switch (command) {
            case "f":
                // Move forward in the x-direction (East & West)
                if (currentDirectionIndex === 1 || currentDirectionIndex === 3) currentPosition[0]++;
                // Move forward in the y-direction (North & South)
                if (currentDirectionIndex === 0 || currentDirectionIndex === 2) currentPosition[1]++;
                // Move upward in the z-direction (Up Down)
                if (currentDirectionIndex === 4 || currentDirectionIndex === 5) currentPosition[2]++;
                break;
            case "b":
                // Move backward in the x-direction (East & West)
                if (currentDirectionIndex === 1 || currentDirectionIndex === 3) currentPosition[0]--;
                // Move backward in the y-direction (North & South)
                if (currentDirectionIndex === 0 || currentDirectionIndex === 2) currentPosition[1]--;
                // Move downward in the z-direction (Up Down)
                if (currentDirectionIndex === 4 || currentDirectionIndex === 5) currentPosition[2]--;
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


module.exports=calculatePoints;