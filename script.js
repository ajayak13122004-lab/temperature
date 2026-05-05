function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let from = document.getElementById("fromUnit").value;
    let to = document.getElementById("toUnit").value;
    let result;

    if (isNaN(temp)) {
        document.getElementById("resultText").innerText = "Enter a valid number!";
        return;
    }

    // Convert to Celsius first
    let celsius;
    if (from === "celsius") {
        celsius = temp;
    } else if (from === "fahrenheit") {
        celsius = (temp - 32) * 5 / 9;
    } else if (from === "kelvin") {
        celsius = temp - 273.15;
    }

    // Convert from Celsius to target
    if (to === "celsius") {
        result = celsius;
    } else if (to === "fahrenheit") {
        result = (celsius * 9 / 5) + 32;
    } else if (to === "kelvin") {
        result = celsius + 273.15;
    }

    document.getElementById("resultText").innerText =
        "Result: " + result.toFixed(2) + " °";
}