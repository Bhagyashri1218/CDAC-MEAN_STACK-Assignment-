let getWeather = function () {
    let xhr = new XMLHttpRequest();

    document.querySelector("#textid").value;

    let cityName = document.querySelector("#textid").value || "mumbai";
    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=fc6f81b5289967dc770d0c69df0d588c&units=metric&q=";

    url = url + cityName;

    xhr.open("GET", url);
    xhr.onload = () => {
        const refjson = JSON.parse(xhr.responseText);
        domOperationForResultDisplay(refjson);
    };

    xhr.send();
};

let domOperationForResultDisplay = (refjson) => {
    console.log(refjson);
    const maxTemp = refjson.main.temp_max;
    const minTemp = refjson.main.temp_min;

    const parent = document.querySelector("#parent");
    const newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = "MAX " + maxTemp + " " + "MIN " + minTemp;

    parent.insertBefore(newElement, parent.firstChild);
};