window.onload = function() {
    var dataset = [100, 200, 300, 400];
  
    var svg = d3.select("body").append("svg")
                                .attr("width",function(){return Math.max(...dataset)})
                                .attr("height",function(){return dataset.length*60});                              
    var elements = svg.selectAll("rect")
                       .data(dataset);
    elements.enter().append("rect")
                     .attr("x",0)
                     .attr("y",function(d,i){return i*60;})
                     .attr("width",function(d){return d;})
                     .attr("height",50)
                     .attr("fill","steelblue");
  }

  // there are some other numbers above that could be updated to use variable name/values too