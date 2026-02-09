import { mowTime } from "../mowTime.js";

import { Text } from "react-native";

export function mowTime({ width, length, rate }) {
    return (
        <View>
            <Text> mowTime({width}, {length}, {rate}) returned {mowTime(width, length, rate)} minutes </Text>
        </View>
    );
}