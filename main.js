function convertToCelsius() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var result = document.getElementById("res");

    if (input1.value !== "") {
        var celsius = parseFloat(input1.value);
        var fahrenheit = (celsius * 9 / 5) + 32;
        input2.value = fahrenheit.toFixed(2);
        result.textContent = "Result-> " + celsius + " °C = " + fahrenheit.toFixed(2) + " °F";
    }
}

function convertToFahrenheit() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var result = document.getElementById("res");

    if (input2.value !== "") {
        var fahrenheit = parseFloat(input2.value);
        var celsius = (fahrenheit - 32) * 5 / 9;
        input1.value = celsius.toFixed(2);
        result.textContent = "Result-> " + fahrenheit + " °F = " + celsius.toFixed(2) + " °C";
    }
}

function clearFields() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");
    var result = document.getElementById("res");

    input1.value = "";
    input2.value = "";
    result.textContent = "Result-> ";
}
