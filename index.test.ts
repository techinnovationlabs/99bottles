import { generate } from "./lyrics";

describe("testcase 1", () => {
    it("should return \"10 bottles of beer on the wall, 10 bottles of beer.Take one down and pass it around, 9 bottles of beer.\" for generate(10)", () => {
        expect(generate(10, 99)).toBe(`\n10 bottles of beer on the wall, 10 bottles of beer.\nTake one down and pass it around, 9 bottles of beer.`);
    });
});

describe("testcase 2", () => {
    it("should return \"1 bottle of beer on the wall, 1 bottle of beer.Take one down and pass it around, no more bottles of beer.\" for generate(10)", () => {
        expect(generate(1, 99)).toBe(`\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer.`);
    });
});

describe("testcase 3", () => {
    it("should return \"No more bottles of beer on the wall, no more bottles of beer.Go to the store and buy some more, 99 bottles of beer\" for generate(10)", () => {
        expect(generate(0, 99)).toBe(`\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer.`);
    });
});