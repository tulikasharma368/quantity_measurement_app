function convertVol(){
    var input = document.querySelector("#value1").value;
    var selectVal = document.querySelector('#selectFrom').value;
    var selectVal2 = document.querySelector('#selectTo').value;
    const result = document.querySelector('#value2');
    switch (selectVal) {
        case "litre":
            switch (selectVal2) {
                case "litre":
                    result.value = input;
                    break;
                case "millileter":
                    result.value = input * 1000;
                    break;
                case "gallon":
                    result.value = input * 0.264;
                    break;
            }
            break;
        case "millileter":
            switch (selectVal2) {
                case "litre":
                    result.value = input * 0.001;
                    break;
                case "millimetre":
                    result.value = input;
                    break;
                case "gallon":
                    result.value = input * 0.000264;
                    break;
            }
            break;
        case "gallon":
            switch (selectVal2) {
                case "litre":
                    result.value = input * 3.785;
                    break;
                case "millileter":
                    result.value = input * 3785411.78;
                    break;
                case "gallon":
                    result.value = input;
                    break;
           }
            break;
    }
}