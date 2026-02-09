//assuming 10 m^2
import { mowTime } from '../src/mowTime.js'

describe("testing mowTime", function() {
    it("mows 10x10 lawn in 10 minutes ", function() {
      expect(mowTime(10,10,10)).toBe(10);
    });
    it("mows 20x15 lawn in 30 minutes ", function() {
      expect(mowTime(20,15,10)).toBe(30);
    });
    it("mows 20x20 lawn in 40 minutes ", function() {
      expect(mowTime(40,20,20)).toBe(40);
    });
});