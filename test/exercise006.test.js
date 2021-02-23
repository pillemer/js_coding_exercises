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
        expect(sumMultiples([1, 2, 3.0, 4, 5, 6])).toBe(14);
    });
    test("returns 0 if no multiples of 3 or 5", () => {
        expect(sumMultiples([1,2,4,7,2])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("returns true if string contains characters C, G, T or A only.", () => {
        expect(isValidDNA('CTGAGTCGGA')).toBe(true);
    });
    test("returns false if string contains other characters", () => {
        expect(isValidDNA('Is not valid DNA')).toBe(false);
    });
    test("is case sensitive", () => {
        expect(isValidDNA("CGTaGTAC")).toBe(false);
        expect(isValidDNA("CGTAGTAC")).toBe(true);
    })
})

describe("getComplementaryDNA", () => {
    test("receives a valid DNA string", () => {
        expect(() => { getComplementaryDNA("invalid DNA string"); }).toThrow();
        expect(() => { getComplementaryDNA("invalid DNA string"); }).toThrowError("DNA string must be valid");
    });
    test("returns a complementary pairing", () => {
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
    })
})