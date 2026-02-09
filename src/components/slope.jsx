import { slope } from "../slope.js";

import { Text } from "react-native";

export function slope({ x1, y1, x2, y2 }) {
    return (
        <Text>
            Slope({x1},{y1},{x2}, {y2}) returned {slope (x1, y2, x2, y2)}
        </Text>
    );
}