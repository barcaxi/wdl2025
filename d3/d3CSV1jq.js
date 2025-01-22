$(document).ready(function() {
    var svg = d3.select("body").append("svg")
                               .attr("width",300)
                               .attr("height",200);                              
    
    d3.csv("d3table.csv").
    then(function(data)
    {
        console.log(data);
        var elements = svg.selectAll("rect")
                      .data(data);
    
        elements.enter().append("rect")
                    .attr("x",0)
                    .attr("y",function(d,i){return i*60;})
                    .attr("width",function(d){return d.value;})
                    .attr("height",50)
                    .attr("fill","steelblue");
    });
});
