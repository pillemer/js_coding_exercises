const {
    sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered
    } = require("../challenges/exercise006");




describe("sumMultiples", () => {
    test("return the sum of any numbers which are a multiple of 3 or 5 in the array", () => {
        expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
        expect(sumMultiples([5, 3, 7, 8, 1, 10], 1)).toBe(10);
        expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
    });
});
