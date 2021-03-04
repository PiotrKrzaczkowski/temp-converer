const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = [...document.getElementsByClassName("input")];

inputs.forEach((input) =>
  input.addEventListener("input", function (e) {
    let value = e.target.value;

    if (e.target.name === "celcius") {
      fahrenheit.value = value * 1.8 + 32;
      kelvin.value = value + 273.15;
    } else if (e.target.name === "fahrenheit") {
      console.log("fff");
      celcius.value = (value - 32) / 1.8;
      kelvin.value = (value - 32) / 1.8 + 293.15;
    } else if (e.target.name === "kelvin") {
      celcius.value = value - 273.15;
      fahrenheit.value = (value - 273.15) * 1.8 + 32;
    }
  })
);
