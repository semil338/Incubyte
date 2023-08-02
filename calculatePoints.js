

function calculatePoints(commands, startingPosition, initialDirection) {

    // Initialize All Directions
    const directions = ["N", "E", "S", "W", "U", "D"];

    // Return if Invalid initialDirection
    // if (!directionIndex.hasOwnProperty(initialDirection)) {
    //     return (`Invalid initial direction "${initialDirection}".`);
    // }

    // Initialize the current position and direction
    let currentPosition = [...startingPosition];
    let currentDirectionIndex = directions.findIndex(value => value === initialDirection);


    let previousDirectionIndex;
    // Loop through every command and update the values
    for (let i = 0; i < commands.length; i++) {
        let command = commands[i];

        if (i === 0) {
            previousDirectionIndex = currentDirectionIndex;
        }
        

        if (currentDirectionIndex >= 4) {
            previousDirectionIndex =  directions.findIndex(value => value ===  commands[i-1])
        }
        else{
            // previousDirectionIndex=currentDirectionIndex;
        }

        console.log(command, currentPosition, directions[currentDirectionIndex], previousDirectionIndex, currentDirectionIndex);


        // let previousDirectionIndex = i == 0 ? currentDirectionIndex : directions.findIndex(value => value === commands[i - 1])
        switch (command) {
            case "f":
                moveForward(currentDirectionIndex, currentPosition);
                break;
            case "b":
                moveBackward(currentDirectionIndex, currentPosition);
                break;
            case "r":
                // Turn right (N -> E -> S -> W -> N)
                if (currentDirectionIndex <= 4) {
                    currentDirectionIndex = (currentDirectionIndex + 1) % 4;
                }
                else {
                    currentDirectionIndex = (previousDirectionIndex + 1) % 4;
                }
                break;
            case "l":
                // Turn left (N -> W -> S -> E -> N)
                if (currentDirectionIndex <= 4) {
                    currentDirectionIndex = (currentDirectionIndex - 1 + 4) % 4;
                }
                else {
                    currentDirectionIndex = (previousDirectionIndex - 1 + 4) % 4;
                }
                break;
            case "u":
                // Change to "U" direction
                currentDirectionIndex = 4;
                break;
            case "d":
                // Change to "D" direction
                currentDirectionIndex = 5;
                break;
            default:
                console.error(`Invalid command "${command}"`);
        }

    }
    console.log(commands[commands.length-1], currentPosition, directions[currentDirectionIndex], previousDirectionIndex, currentDirectionIndex);


    // return posiition and direction
    return {
        finalPosition: currentPosition,
        finalDirection: directions[currentDirectionIndex]
    };
}


function moveBackward(currentDirectionIndex, currentPosition) {
    // Move forward in the x-direction (East & West)
    if (currentDirectionIndex === 1 || currentDirectionIndex === 3) currentPosition[0]--;
    // Move backward in the y-direction (North & South)
    if (currentDirectionIndex === 0 || currentDirectionIndex === 2) currentPosition[1]--;
    // Move downward in the z-direction (Up Down)
    if (currentDirectionIndex === 4 || currentDirectionIndex === 5) currentPosition[2]--;
}

function moveForward(currentDirectionIndex, currentPosition) {
    // Move backward in the x-direction (East & West)
    if (currentDirectionIndex === 1 || currentDirectionIndex === 3) currentPosition[0]++;
    // Move forward in the y-direction (North & South)
    if (currentDirectionIndex === 0 || currentDirectionIndex === 2) currentPosition[1]++;
    // Move upward in the z-direction (Up Down)
    if (currentDirectionIndex === 4 || currentDirectionIndex === 5) currentPosition[2]++;
}



module.exports = calculatePoints;