function konversiSuhu() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var selectFrom = document.getElementById("selectFrom").value;
    var result = document.getElementById("result");
    var convertedTemp;

    if (isNaN(inputTemp)) {
        result.innerHTML = "Masukkan suhu yang valid";
        return;
    }

    if (selectFrom === "celsius") {
        convertedTemp = {celsius: inputTemp,fahrenheit: (inputTemp * 9/5) + 32,kelvin: inputTemp + 273.15};
    } else if (selectFrom === "fahrenheit") {
        convertedTemp = {celsius: (inputTemp - 32) * 5/9,fahrenheit: inputTemp,kelvin: (inputTemp - 32) * 5/9 + 273.15};
    } else if (selectFrom === "kelvin") {
        convertedTemp = {celsius: inputTemp - 273.15,fahrenheit: (inputTemp - 273.15) * 9/5 + 32,kelvin: inputTemp};
    }

    result.innerHTML = `${inputTemp.toFixed(2)} ${selectFrom} sama dengan:<br>${convertedTemp.celsius.toFixed(2)} 
    Celsius<br>${convertedTemp.fahrenheit.toFixed(2)} Fahrenheit<br>${convertedTemp.kelvin.toFixed(2)} Kelvin`;
}
