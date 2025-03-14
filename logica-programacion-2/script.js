console.log("\t Conversor de Temperaturas\n");

/*function validarNumero(temperaturaCelsius) {
    return typeof temperaturaCelsius === 'number' && !isNaN(temperaturaCelsius);
  }*/

function celsiusAFahrenheit (celsius) {    
    return (celsius * 1.8) + 32;

}

function celsiusAKelvin (celsius) {
    return celsius + 273.15;

}

let temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));

while (isNaN(temperaturaCelsius)) {
    alert("Por favor, ingresa un dato numérico.");

    temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius: "));

}


console.log(`Temperatura en Fahrenheit: ${celsiusAFahrenheit(temperaturaCelsius)}`);
console.log(`Temperatura en Kelvin: ${celsiusAKelvin(temperaturaCelsius)}`);

