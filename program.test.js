const applyCommands = require(".");

describe('applyCommands function', () => {
  test('should correctly execute commands and return final position and direction', () => {
    const commands = ["f", "r", "u", "b", "l"];
    const startingPosition = [0, 0, 0];
    const initialDirection = "N";

    const result = applyCommands(commands, startingPosition, initialDirection);

    expect(result.finalPosition).toStrictEqual([0, 1, -1]);
    expect(result.finalDirection).toBe("W");
  });
});
