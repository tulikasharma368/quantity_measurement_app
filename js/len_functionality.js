function convertLen(){
    var input = document.querySelector("#value1").value;
    var selectVal = document.querySelector('#selectFrom').value;
    var selectVal2 = document.querySelector('#selectTo').value;
    const result = document.querySelector('#value2');
    switch (selectVal) {
        case "kilometre":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input;
                    break;
                case "metres":
                    result.value = input * 1000;
                    break;
                case "centimetre":
                    result.value = input * 100000;
                    break;
                case "milimetre":    
                    result.value = input * 1000000;
                    break;
                case "micrometre":
                    result.value = input * 1000000000;
                    break;
                case "mile":
                    result.value = input * 0.62;
                    break;
                case "foot":
                    result.value = input * 3280.84;
                    break;
                case "inch":    
                    result.value = input * 39370.079;
                    break;
            }
            break;
        case "metres":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * 0.001;
                    break;
                case "metres":
                    result.value = input;
                    break;
                case "centimetre":
                    result.value = input * 100;
                    break;
                case "milimetre":    
                    result.value = input * 1000;
                    break;
                case "micrometre":
                    result.value = input * 1000000;
                    break;
                case "mile":
                    result.value = input * 0.000621;
                    break;
                case "foot":
                    result.value = input * 3.28084;
                    break;
                case "inch":    
                    result.value = input * 39.3701;
                    break;
            }
            break;
        case "centimetre":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * .000001;
                    break;
                case "metres":
                    result.value = input * .01;
                    break;
                case "centimetre":
                    result.value = input;
                    break;
                case "milimetre":    
                    result.value = input * 10;
                    break;
                case "micrometre":
                    result.value = input * 10000;
                    break;
                case "mile":
                    result.value = input * 0.000006214;
                    break;
                case "foot":
                    result.value = input * 0.0328;
                    break;
                case "inch":    
                    result.value = input * 0.394;
                    break;
            }
            break;
        case "milimetre":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * 0.000001;
                    break;
                case "metres":
                    result.value = input * 0.001;
                    break;
                case "centimetre":
                    result.value = input * 0.1;
                    break;
                case "milimetre":    
                    result.value = input;
                    break;
                case "micrometre":
                    result.value = input * 1000;
                    break;
                case "mile":
                    result.value = input * 0.0000006214;
                    break;
                case "foot":
                    result.value = input * 0.00328;
                    break;
                case "inch":    
                    result.value = input * 0.0394;
                    break;
            }   
            break;
        case "micrometre":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * 0.000000001;
                    break;
                case "metres":
                    result.value = input * 0.000001;
                    break;
                case "centimetre":
                    result.value = input * 0.0001;
                    break;
                case "milimetre":    
                    result.value = input * 0.001;
                    break;
                case "micrometre":
                    result.value = input;
                    break;
                case "mile":
                    result.value = input * 0.0000000006214;
                    break;
                case "foot":
                    result.value = input * 0.00000328;
                    break;
                case "inch":    
                    result.value = input * 0.0000394;
                    break;
            }
            break;
        case "mile":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * 1.60;
                    break;
                case "metres":
                    result.value = input * 1609.34;
                    break;
                case "centimetre":
                    result.value = input * 160934.4;
                    break;
                case "milimetre":    
                    result.value = input * 1609344;
                    break;
                case "micrometre":
                    result.value = input * 1609344000;
                    break;
                case "mile":
                    result.value = input;
                    break;
                case "foot":
                    result.value = input * 5280;
                    break;
                case "inch":    
                    result.value = input * 63360;
                    break;
            }
            break;
        case "foot":
            switch (selectVal2) {
                case "kilometre":
                    result.value = input * 0.000305;
                    break;
                case "metres":
                    result.value = input * 0.305;
                    break;
                case "centimetre":
                    result.value = input * 30.48;
                    break;
                case "milimetre":    
                    result.value = input * 304.8;
                    break;
                case "micrometre":
                    result.value = input * 304800;
                    break;
                case "mile":
                    result.value = input * 0.0000189;
                    break;
                case "foot":
                    result.value = input;
                    break;
                case "inch":    
                    result.value = input * 12;
                    break;
            }
            break;
        case "inch":    
        switch (selectVal2) {
            case "kilometre":
                result.value = input * .0000254;
                break;
            case "metres":
                result.value = input * 0.0254;
                break;
            case "centimetre":
                result.value = input * 2.54;
                break;
            case "milimetre":    
                result.value = input * 25.4;
                break;
            case "micrometre":
                result.value = input * 25400;
                break;
            case "mile":
                result.value = input * .00001578;
                break;
            case "foot":
                result.value = input * 0.0833;
                break;
            case "inch":    
                result.value = input;
                break;
        }
            break;
    }
}