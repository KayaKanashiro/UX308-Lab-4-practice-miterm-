import { AirQuality } from "../airQuality.js";

import { Text } from "react-native";

//input AQI

export function AirQuality({ AQI }) {
    let quality = AirQuality(AQI);
    return (
        <Text>
            The air is {(AQI)} thus the quality is {AirQuality(AQI)}
        </Text>
    )
}