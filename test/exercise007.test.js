const {
    sumDigits,
    createRange,
    getScreentimeAlertList,
    hexToRGB,
    findWinner,
    } = require("../challenges/exercise007");

describe("sumDigits", () => {
        test("returns the sum of all digits in a number", () => {
            expect(sumDigits(0)).toBe(0);
            expect(sumDigits(123)).toBe(6);
            expect(sumDigits(1423)).toBe(10);
            expect(sumDigits(7290)).toBe(18);
        });
    });