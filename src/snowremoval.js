//input cm of snowfall
export function snowremoval(cm) {
  //processing
  let equipment = "";
  if (cm <= 1) {
    equipment = "broom";
  } else if (cm <= 10) {
    equipment = "shovel";
  } else if (cm <= 25) {
    equipment = "electric snow blower";
  } else {
    equipment = "gas snow blower";
  }
  //output
  return (equipment);
}

//developer test
if (import.meta.main) {
  console.log(`snowRemoval(3)= ${SnowRemoval(3)}`);
}