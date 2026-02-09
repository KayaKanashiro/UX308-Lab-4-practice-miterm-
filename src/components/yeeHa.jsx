import { yeeHa } from "../yeeHa.js";

import {
  Text,
  View,
} from 'react-native';

//input num

export function yeeHa({ num }) {
    return (
        <Text>
            The number is {(num)} thus the word is {yeeHa(num)}
        </Text>
    )
}