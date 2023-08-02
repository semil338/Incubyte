const calculatePoints = require("./calculatePoints");

describe('calculatePoints function', () => {

    test('Initial case - 1', () => {
        const commands = ["f", "r", "u", "b", "l"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "N";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0, 1, -1]);
        expect(result.finalDirection).toBe("W");
    });

    test('Should handle invalid commands gracefully and skip them - 2', () => {
        const commands = ["f", "r", "u", "b", "l","x"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "N";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0, 1, -1]);
        expect(result.finalDirection).toBe("W");
    });

    test('Custom value case - 1', () => {
        const commands = ["f", "l", "b", "u", "f", "r"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "S";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([-1, 1, 1]);
        expect(result.finalDirection).toBe("E");
    }); 

    test('Custom value case - 2', () => {
        const commands = ["b", "u", "b", "l", "f"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "E";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0, 0, -1]);
        expect(result.finalDirection).toBe("W");
    }); 

    test('Custom value case - 3', () => {
       const commands = ["f", "r","l", "b", "u", "f", "r"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "W";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0,0,1]);
        expect(result.finalDirection).toBe("E");
    });

    test('Custom  case ', () => {
       const commands = ["u", "r"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "W";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0,0,0]);
        expect(result.finalDirection).toBe("N");
    });
    
    test('Custom case ', () => {
       const commands = ["u", "r"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "W";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0,0,0]);
        expect(result.finalDirection).toBe("N");
    });  

    test('Custom case ', () => {
       const commands = ["u", "r"];
        const startingPosition = [0, 0, 0];
        const initialDirection = "W";

        const result = calculatePoints(commands, startingPosition, initialDirection);
        expect(result.finalPosition).toStrictEqual([0,0,0]);
        expect(result.finalDirection).toBe("N");
    });

    
});
