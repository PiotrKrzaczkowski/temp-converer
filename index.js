const celcius = document.getElementById("celciu");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

const inputs = [...document.getElementsByClassName("input")];

inputs.forEach((input) =>
  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    if (e.target.name === "celcius") {
      fahrenheit.value = value * 1.8 + 32;
      kelvin.value = value + 273.15;
    } else if (e.target.name === "fahrenheit") {
      console.log("fahrrr");
    } else if (e.target.name === "kelvin") {
      console.log("kellllvin");
    }
  })
);
