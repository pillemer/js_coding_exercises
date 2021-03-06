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
    test("returns the complementary pairing", () => {
        expect(getComplementaryDNA("A")).toBe("T");
        expect(getComplementaryDNA("T")).toBe("A");
        expect(getComplementaryDNA("C")).toBe("G");
        expect(getComplementaryDNA("G")).toBe("C");
    });
    test("returns a complementary string", () => {
        expect(getComplementaryDNA("AA")).toBe("TT");
        expect(getComplementaryDNA("GTCA")).toBe("CAGT");
    })
})

describe("isItPrime", () => {
    test("returns true if number is below 4", () => {
        expect(isItPrime(0)).toBe(true);
        expect(isItPrime(1)).toBe(true);
        expect(isItPrime(2)).toBe(true);        
        expect(isItPrime(3)).toBe(true);
    })
    test("returns true if the number is prime", () => {
        expect(isItPrime(1)).toBe(true);
        expect(isItPrime(37)).toBe(true);
        expect(isItPrime(359)).toBe(true);        
    })
    test("returns false if the number is not prime", () => {
        expect(isItPrime(4)).toBe(false);
        expect(isItPrime(99)).toBe(false);
        expect(isItPrime(358)).toBe(false);
    })
})

describe("createMatrix", () => {
    test("returns an array with n items", () => {
        expect(createMatrix(1, 'foo').length).toBe(1);
        expect(createMatrix(2, 'bar').length).toBe(2);
        expect(createMatrix(5, 'spam').length).toBe(5);
    })
    test("returns an array of n arrays on length n", () => {
        expect(createMatrix(2,"foo")).toStrictEqual([["foo", 'foo'],
                                                    ["foo", 'foo']])
        expect(createMatrix(4,"bar")).toStrictEqual([["bar", "bar","bar","bar"],
                                                    ["bar", "bar","bar","bar"],
                                                    ["bar", "bar","bar","bar"],
                                                    ["bar", "bar","bar","bar"]])                                                    
    })
})

describe("areWeCovered", () => {
    const staff = [
        { name: "Elizabeth", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Philip", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Charles", rota: ["Monday", "Tuesday", "Thursday"] },
        { name: "Anne", rota: ["Sunday", "Friday", "Wednesday"] },
        { name: "Andrew", rota: ["Wednesday", "Friday"] },
        { name: "Edward", rota: ["Saturday"] },
    ]
    test("throws error if day is not a valid day of the week", () => {
        expect(() => { areWeCovered('', 'firday'); }).toThrow();
        expect(() => { areWeCovered('', 'firday'); }).toThrowError("day is incorrect");
    });
    test("returns false if less than three staff are working on a given day", () => {
        expect(areWeCovered(staff, 'Wednesday')).toBe(false);
        expect(areWeCovered(staff, 'Thursday')).toBe(false);
        expect(areWeCovered(staff, 'Saturday')).toBe(false);
        expect(areWeCovered(staff, 'Sunday')).toBe(false);
    })
    test("returns true if three or more staff are working on a given day", () => {
        expect(areWeCovered(staff, 'Monday')).toBe(true);
        expect(areWeCovered(staff, 'Tuesday')).toBe(true);
        expect(areWeCovered(staff, 'Friday')).toBe(true);
    })
})
/*
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members 
 * are required per day. The function should return true/false depending on whether 
 * there are enough staff scheduled for the given day.
 */