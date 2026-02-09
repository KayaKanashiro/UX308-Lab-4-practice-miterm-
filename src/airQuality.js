export function AirQuality(AQI) {
    let quality = "";
    if (AQI <= 50) {
        quality = "Good";
    } else if (AQI <= 100) {
        quality = "Moderate";
    } else if (AQI <= 150) {
        quality = "Unhealthy for Sensitive Groups";
    } else if (AQI <= 200) {
        quality = "Unhealthy";
    } else if (AQI <= 300) {
        quality = "Very unhealthy";
    } else {
        quality = "Hazardous";
    }
    //output
    return (quality);
}

//developer test
if (import.meta.main) {
    console.log(`AirQuality(400)= ${AirQuality(400)}`);
}
