$("document").ready(function() {
    function printStationData(element,i){
       $("#data").append(`${i+1} : ${element.name}<br>`);
    }				
    _.each(stations, printStationData);
 });
