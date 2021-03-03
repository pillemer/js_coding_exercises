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

describe("getScreentimeAlertList", () => {
    const ScreenTimeData = [
        {
            username: "beth_1234",
            name: "Beth Smith",
            screenTime: [
                { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
            ]
        },
        {
            username: "sam_j_1989",
            name: "Sam Jones",
            screenTime: [
                { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
            ]
        },
    ]
    test("will return empty array if given date is not in the array", () => {
        expect(getScreentimeAlertList(ScreenTimeData, "2019-05-10")).toStrictEqual([]);
    });
    test("will return array with correct username if they have more than 100 minutes of screentime at given date", () => {
        expect(getScreentimeAlertList(ScreenTimeData, "2019-05-04")).toStrictEqual(["beth_1234"]);
    });
    test("will return empty array if no user has more than 100 minutes of screentime at given date", () => {
        expect(getScreentimeAlertList(ScreenTimeData, "2019-06-11")).toStrictEqual([]);
    });
})