$(document).ready(function() {
    var dataset = [100, 200, 300];
    var svg = d3.select("body").append("svg")
                                .attr("width",300)
                                .attr("height",200);
    
    var elements = svg.selectAll("rect")
                        .data(dataset);
    console.log(elements);
});