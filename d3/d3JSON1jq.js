$(document).ready(function() {
    var svg = d3.select("body").append("svg")
                               .attr("width",300)
                               .attr("height",200);                              
    
    d3.json("http://localhost/d3/numbers.json",{cache: "no-store"}).then(function(dataset)
    {
        console.log(dataset);        
        var elements = svg.selectAll("rect")
                      .data(dataset);
        elements.enter().append("rect")
                    .attr("x",0)
                    .attr("y",function(d,i){return i*60;})
                    .attr("width",function(d){return d.value;})
                    .attr("height",50)
                    .attr("fill","steelblue");
    });    
});
