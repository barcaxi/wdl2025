window.onload = function() {

    var svgHeight = document.getElementById('svg').getAttribute('height');
    var svgWidth = document.getElementById('svg').getAttribute('width');
    var barWidth=50;
    var spacing=10;

    var svg = d3.select("svg");
                               
    d3.json("http://localhost:3000/NBAgetAgeData").then(function(dataset)
    {
        console.log(dataset); 

        // your solution here        
    });   
}
