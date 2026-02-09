export function FeettoAcres(sqft) {
    //input
    let nsquarefeet = sqft;

    //processing
    let nacres = nsquarefeet / 43560;

    //output
    console.log(`${nsquarefeet} square feet is ${nacres} acres`)

    return nacres;
}