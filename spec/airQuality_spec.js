import { airQuality } from "../src/airQuality.js";

describe("testing for air quality", function () {
    it("tests for 50", function () {
        let quality = airQuality(50);
        expect(quality).toBe("Good");
    });
      it("tests for 75", function () {
        let quality = airQuality(75);
        expect(quality).toBe("Moderate");
    });
        it("tests for 130", function () {
        let quality = airQuality(130);
        expect(quality).toBe("Unhealthy for Sensitive Groups");
    });
        it("tests for 180", function () {
        let quality = airQuality(180);
        expect(quality).toBe("Unhealthy");
    });
        it("tests for 220", function () {
        let quality = airQuality(220);
        expect(quality).toBe("Very unhealthy");
    });
        it("tests for 415", function () {
        let quality = airQuality(415);
        expect(quality).toBe("Hazardous");
    });
});