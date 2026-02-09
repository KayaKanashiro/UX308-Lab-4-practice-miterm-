import { yeeHa } from "../src/yeeHa.js";

describe("testing yeeHa", function(){
    it("returns Yee Ha for numbers divisible by 3 and 7", function(){
        expect(yeeHa(21)).toBe("Yee Ha");
    });
    it("returns Yee for numbers divisible by 3", function(){
        expect(yeeHa(6)).toBe("Yee");
    });
    it("returns Ha for numbers divisible by 7", function(){
        expect(yeeHa(49)).toBe("Ha");
    });
    it("returns Nada for numbers not divisible by 3 or 7", function(){
        expect(yeeHa(64)).toBe("Nada");
    });
})