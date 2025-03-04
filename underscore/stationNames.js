$("document").ready(function() {

    function printStationData(element, i)
    {
        $("#data").append(`${i} : ${element.name}<br>`);
    }
    
    _.each(stations, printStationData);

});
