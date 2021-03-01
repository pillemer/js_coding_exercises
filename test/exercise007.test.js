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
        expect(createRange(0, 6, 1)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
        expect(createRange(0, 6, 2)).toStrictEqual([0, 2, 4, 6]);
        expect(createRange(10, 60, 10)).toStrictEqual([10, 20, 30, 40, 50, 60]);
        
    });
    test("returns array of numbers with step 1 if no step given", () => {
        expect(createRange(0, 6)).toStrictEqual([0, 1, 2, 3, 4, 5, 6]);
        expect(createRange(5, 8)).toStrictEqual([5, 6, 7, 8]);
    });
    test("returns correct array with negative step", () => {
        expect(createRange(10, 6, -1)).toStrictEqual([10, 9, 8, 7, 6]);
        expect(createRange(99, 69, -3)).toStrictEqual([99, 96, 93, 90, 87, 84, 81, 78, 75, 72, 69]);
    });

});