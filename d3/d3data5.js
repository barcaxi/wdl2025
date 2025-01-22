window.onload = function() {
  var dataset = [100, 200, 300, 400];

  var svg = d3.select("body").append("svg")
                              .attr("width",300)
                              .attr("height",200);
                              
  var elements = svg.selectAll("rect")
                     .data(dataset);
  elements.enter().append("rect")
                   .attr("x",0)
                   .attr("y",function(d,i){return i*60;})
                   .attr("width",function(d){return d;})
                   .attr("height",50)
                   .attr("fill","steelblue");
}