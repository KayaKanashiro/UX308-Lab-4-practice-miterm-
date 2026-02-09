import { FeettoAcres } from "../src/FeettoAcres.js";

describe("testing FeettoAcres", function() {
    it("converts 43560 sqft to 1 acre", function() {
      let acres = FeettoAcres(43560);
      expect(acres).toBe(1);
    });
    it("converts 21780 sqft to 0.5 acre", function() {
      let acres = FeettoAcres(21780);
      expect(acres).toBe(0.5);
    });
    it("converts 4356 sqft to 0.1 acre", function() {
      let acres = FeettoAcres(4356);
      expect(acres).toBe(0.1);
    });
  });