//Setting the value of kelvin
const kelvin = 0;

//converting kelvin to celsius
let celsius = kelvin - 273;

let newton = Math.floor(celsius * (33 / 100));

//converting to fahrenheit
//used Math.floor() to round down the fahrenheit value
let fahrenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
console.log(`The temperature is ${newton} degrees newton`);