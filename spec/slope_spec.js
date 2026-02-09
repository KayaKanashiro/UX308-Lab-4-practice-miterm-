import { slope } from "../src/slope.js";

describe("testing slope", function() {
    it("it calculates the slope of a line with slope 1 ", function() {
      expect(slope(0,0,1,1)).toBe(1);
    });
    it("it calculates the slope of a line with slope 2 ", function() {
      expect(slope(1,1,3,5)).toBe(2);
    });
        it("it calculates the slope of a line with slope 3 ", function() {
      expect(slope(1,1,5,13)).toBe(3);
    });
});