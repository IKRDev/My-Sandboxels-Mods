// Mod testing with temperature

let teVs = {
  min: Number.MIN_VALUE,
  max: Number.MAX_VALUE
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
// Function from August Miller
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

elements.tempspawn {
    color: "#000000",
    behavior: behaviors.WALL,
    category: "special",
    state: "solid"
}

behaviors.tempspawn.tick = function(pixel) {
  pixel.color = rgbToHex(scale(pixel.temp, teVs.min, teVs.max, 0, 255), 0, 0)
};