const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
    } = require("../challenges/exercise007");

describe("sumDigits", () => {
        test("returns the sum of all digits in a number", () => {
            expect(sumDigits([123])).toBe(6);
        });
    });