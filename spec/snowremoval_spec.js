//spec/snowremoval_spec.js

import { snowremoval } from "../src/snowremoval.js";

describe("testing for proper snow removal equipment", function () {
    it("tests for 0.5", function () {
        let equipment = snowremoval(0.5);
        expect(equipment).toBe("broom");
    });
    it("tests 1.5", function () {
        let equipment =
            snowremoval(1.5);
        expect(equipment).toBe("shovel");
    });
    it("tests 25", function () {
        let equipment =
            snowremoval(25);
        expect(equipment).toBe("electric snow blower");
    });
    it("tests 60", function () {
        let equipment =
            snowremoval(60)
        expect(equipment).toBe("gas snow blower");
    });
});