function calculatePoints(commands, startingPosition, initialDirection) {
  // Initialize All Directions
  const directions = ["N", "E", "S", "W", "U", "D"];

  // Return if Invalid initialDirection
  if (!directions.includes(initialDirection)) {
    return `Invalid initial direction "${initialDirection}".`;
  }

  // Initialize the current position and direction
  let currentPosition = [...startingPosition];
  let currentDirectionIndex = directions.findIndex(
    (value) => value === initialDirection
  );

  // Loop through every command and update the values
  let previousDirectionIndex;
  for (let i = 0; i < commands.length; i++) {
    let command = commands[i];

    if (i === 0) {
      previousDirectionIndex = currentDirectionIndex;
    }

    if (currentDirectionIndex < 4) {
      previousDirectionIndex = currentDirectionIndex;
    }

    console.log(
      i,
      command,
      currentPosition,
      " Current : ",
      directions[currentDirectionIndex],
      currentDirectionIndex,
      " Previous : ",
      previousDirectionIndex
    );

    switch (command) {
      case "f":
        moveForward(currentDirectionIndex, currentPosition);
        break;
      case "b":
        moveBackward(currentDirectionIndex, currentPosition);
        break;
      case "r":
        // Turn right (N -> E -> S -> W -> N) if not UP or DOWN
        currentDirectionIndex = moveRight(
          currentDirectionIndex,
          previousDirectionIndex
        );
        break;
      case "l":
        // Turn left (N -> W -> S -> E -> N) if not UP or DOWN
        currentDirectionIndex = moveLeft(
          currentDirectionIndex,
          previousDirectionIndex
        );
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

  console.log(
    commands[commands.length - 1],
    currentPosition,
    directions[currentDirectionIndex],
    previousDirectionIndex,
    currentDirectionIndex
  );

  // return position and direction
  return {
    finalPosition: currentPosition,
    finalDirection: directions[currentDirectionIndex],
  };
}

function moveRight(currentDirectionIndex, previousDirectionIndex) {
  if (currentDirectionIndex >= 4) {
    currentDirectionIndex = (previousDirectionIndex + 1) % 4;
  } else {
    currentDirectionIndex = (currentDirectionIndex + 1) % 4;
  }
  return currentDirectionIndex;
}

function moveLeft(currentDirectionIndex, previousDirectionIndex) {
  if (currentDirectionIndex >= 4) {
    switch (previousDirectionIndex) {
      case 0:
        currentDirectionIndex = 2;
        break;
      case 1:
        currentDirectionIndex = 3;
        break;
      case 2:
        currentDirectionIndex = 0;
        break;
      case 3:
        currentDirectionIndex = 1;
        break;

      default:
        break;
    }
  } else {
    currentDirectionIndex = (currentDirectionIndex - 1 + 4) % 4;
  }
  return currentDirectionIndex;
}

function moveBackward(currentDirectionIndex, currentPosition) {
  // Move forward in the x-direction (East & West)
  if (currentDirectionIndex === 1 || currentDirectionIndex === 3)
    currentPosition[0]--;
  // Move backward in the y-direction (North & South)
  if (currentDirectionIndex === 0 || currentDirectionIndex === 2)
    currentPosition[1]--;
  // Move downward in the z-direction (Up Down)
  if (currentDirectionIndex === 4 || currentDirectionIndex === 5)
    currentPosition[2]--;
}

function moveForward(currentDirectionIndex, currentPosition) {
  // Move backward in the x-direction (East & West)
  if (currentDirectionIndex === 1 || currentDirectionIndex === 3)
    currentPosition[0]++;
  // Move forward in the y-direction (North & South)
  if (currentDirectionIndex === 0 || currentDirectionIndex === 2)
    currentPosition[1]++;
  // Move upward in the z-direction (Up Down)
  if (currentDirectionIndex === 4 || currentDirectionIndex === 5)
    currentPosition[2]++;
}

module.exports = calculatePoints;
