$(document).ready(function() {

    var dataset = [{x: 0, y: 150},{x: 50, y: 50},{x: 100, y: 0},{x: 150, y: 50},{x: 200, y: 0}];
    var dataset2 = [5,22,28,42,53,61,52,36,38,34,40,19,23,20,13,5,5,7,6,1,1,2,1];

    var line = d3.line()
        .x(function(d){
            return d.x;
        })
        .y(function(d){
            return d.y;
        });
    
    var svg = d3.select("#mysvg");   

});
