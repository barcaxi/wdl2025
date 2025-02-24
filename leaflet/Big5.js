$("document").ready(function (){
    
    // add your solution here

    var map = L.map('map').setView([54.95212256082817,-7.7209027774341905], 16);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

});