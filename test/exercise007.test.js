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

describe("createRange", () => {
    test("returns array of numbers", () => {
        // expect(createRange(0, 6, 1)).toBe([0, 1, 2, 3, 4, 5, 6]);
        expect(createRange(0, 6, 2)).toBe([0, 2, 4, 6]);
    });
});