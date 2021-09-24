function length(){
    let innerhtml;
    innerhtml = `<div class="from">
    <form>
        <p class="p">from</p>
        <input type="number" placeholder="input">
        <select name="len-value1" id="len-value1">
            <option value="kilometre">Kilometre</option>
            <option value="metres">Metres</option>
            <option value="centimetre">Centimetres</option>
            <option value="milimetre">Milimetre</option>
            <option value="micrometre">Micrometre</option>
            <option value="mile">Mile</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
        </select>
    </form>
</div><!-- from value-->
<div class="to">
    <form>
        <p class="p">to</p>
        <input type="number" placeholder="ouput">
        <select name="len-value2" id="len-value2">
            <option value="kilometre">Kilometre</option>
            <option value="metres">Metres</option>
            <option value="centimetre">Centimetres</option>
            <option value="milimetre">Milimetre</option>
            <option value="micrometre">Micrometre</option>
            <option value="mile">Mile</option>
            <option value="foot">Foot</option>
            <option value="inch">Inch</option>
        </select>
    </form>
</div><!-- to value -->`
document.querySelector(".hover-green").innerHTML = `<img class="length" src="/assets/len.svg" alt="">
<p class="quantity length-color">Length</p>`
document.querySelector(".hover-green").classList.add("len-new");
document.querySelector(".convert-items").innerHTML = innerhtml;

document.querySelector(".hover-red").innerHTML = `<img class="temperature" src="/assets/temp_gray.svg" alt="">
<p class="quantity">Temperature</p>`
document.querySelector(".hover-red").classList.remove("temp-new");

document.querySelector(".hover-purple").innerHTML = `<img class="volume" src="/assets/vol_gray.svg" alt="">
<p class="quantity">Volume</p>`
document.querySelector(".hover-purple").classList.remove("vol-new");

}

function temperature(){
    let innerhtml;
    innerhtml = `<div class="from">
    <form>
        <p class="p">from</p>
        <input type="number" placeholder="input">
        <select name="temp-value1" id="temp-value1">
            <option value="celcius">Celcius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
        </select>
    </form>
</div><!-- from value-->
<div class="to">
    <form>
        <p class="p">to</p>
        <input type="number" placeholder="ouput">
        <select name="temp-value2" id="temp-value2">
        <option value="celcius">Celcius</option>
        <option value="fahrenheit">Fahrenheit</option>
        <option value="kelvin">Kelvin</option>
        </select>
    </form>
</div><!-- to value -->
`
document.querySelector(".hover-red").innerHTML = `<img class="temperature" src="/assets/temp.svg" alt="">
<p class="quantity temp-color">Temperature</p>`
document.querySelector(".hover-red").classList.add("temp-new");
document.querySelector(".convert-items").innerHTML = innerhtml;

document.querySelector(".hover-green").innerHTML = `<img class="length" src="/assets/length_gray.svg" alt="">
<p class="quantity">Length</p>`
document.querySelector(".hover-green").classList.remove("len-new");

document.querySelector(".hover-purple").innerHTML = `<img class="volume" src="/assets/vol_gray.svg" alt="">
<p class="quantity">Volume</p>`
document.querySelector(".hover-purple").classList.remove("vol-new");

}

function volume(){
    let innerhtml;
    innerhtml = `<div class="from">
    <form>
        <p class="p">from</p>
        <input type="number" placeholder="input">
        <select name="vol-value1" id="vol-value1">
            <option value="litre">Litre</option>
            <option value="millimetre">Millimeter</option>
            <option value="gallon">Gallon</option>
        </select>
    </form>
</div><!-- from value-->
<div class="to">
    <form>
        <p class="p">to</p>
        <input type="number" placeholder="ouput">
        <select name="vol-value2" id="vol-value2">
        <option value="litre">Litre</option>
        <option value="millimetre">Millimeter</option>
        <option value="gallon">Gallon</option>
        </select>
    </form>
</div><!-- to value -->`
document.querySelector(".hover-purple").innerHTML = `<img class="volume" src="/assets/vol.svg" alt="">
<p class="quantity vol-color">Volume</p>`
document.querySelector(".hover-purple").classList.add("vol-new");
document.querySelector(".convert-items").innerHTML = innerhtml;

document.querySelector(".hover-green").innerHTML = `<img class="length" src="/assets/length_gray.svg" alt="">
<p class="quantity">Length</p>`
document.querySelector(".hover-green").classList.remove("len-new");

document.querySelector(".hover-red").innerHTML = `<img class="temperature" src="/assets/temp_gray.svg" alt="">
<p class="quantity">Temperature</p>`
document.querySelector(".hover-red").classList.remove("temp-new");

}
