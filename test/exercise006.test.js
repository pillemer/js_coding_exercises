const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    } = require("../challenges/exercise006");

describe("sumMultiples", () => {
    test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
        expect(sumMultiples([1, 2, 3, 4, 5, 6])).toBe(14);
    });
    test("returns 0 if no multiples of 3 or 5", () => {
        expect(sumMultiples([1,2,4,7,2])).toBe(0);
    });
});