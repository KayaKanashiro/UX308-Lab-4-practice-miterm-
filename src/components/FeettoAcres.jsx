import {Text} from "react-native";

import { FeettoAcres } from "../FeettoAcres.js";

//input sqft
export function FeettoAcres({sqft}){
    let nacres = FeettoAcres / 43560;
    return(
        <Text>
            {nsquarefeet(sqft)} in feet is equal to {nacres} in acres
        </Text>
    )
}