function convertTemp(){
    var input = document.querySelector("#value1").value;
    var selectVal = document.querySelector('#selectFrom').value;
    var selectVal2 = document.querySelector('#selectTo').value;
    const result = document.querySelector('#value2');
    switch (selectVal) {
        case "celcius":
            switch (selectVal2) {
                case "celcius":
                    result.value = input;
                    break;
                case "fahrenheit":
                    result.value = (input * 1.8) + 32;
                    break;
                case "kelvin":
                    result.value = input +273.15;
                    break;
            }
            break;
        case "fahrenheit":
            switch (selectVal2) {
                case "celcius":
                    result.value = (input -32)/1.8;
                    break;
                case "fahrenheit":
                    result.value = input;
                    break;
                case "kelvin":
                    result.value = (input - 32) * (5/9) +273.15;
                    break;
            }
            break;
        case "kelvin":
            switch (selectVal2) {
                case "celcius":
                    result.value = input - 273.15;
                    break;
                case "fahrenheit":
                    result.value = (input - 273.15) * (9/5) +32;
                    break;
                case "kelvin":
                    result.value = input;
                    break;
           }
            break;
    }
}