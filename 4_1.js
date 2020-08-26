let callAjaxUsingJquery = () => {
    let cityName = $("#textid").val() || "Nashik";

    let url =
        "https://api.openweathermap.org/data/2.5/weather?appid=fc6f81b5289967dc770d0c69df0d588c&units=metric&q=" +
        cityName;

    $.ajax(url).done((data1) => {
        $("#parent :nth-child(1)")
            .clone(true)
            .html(data1.name + " " + data1.main.temp_max)
            .insertBefore($("#parent :nth-child(1)"));

        // clean the box
        $("#textid").val("");
    });
}; 