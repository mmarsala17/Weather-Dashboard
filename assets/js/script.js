$(document).ready(function() {

    $("#location-button").on("click", function() {

        var locationValue = $("#Location").val();
        $("#Location").val("");
        searchForecast(locationValue);
    })
})