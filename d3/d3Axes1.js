window.onload = function(){
	var data = [100, 200, 300, 400, 500, 400, 300, 200, 100];	
	var spacing = 10;
    var barwidth = 50;
	var height = d3.select("svg").attr("height");
	var width = d3.select("svg").attr("width");

	var svg = d3.select("svg");
	var y = d3.scaleLinear()
			   .domain([0,d3.max(data)])
			   .range([height,0]);
	var yAxis = d3.axisLeft(y); 

	var chartGroup = svg.append("g")
	 					 .attr("transform","translate(50,0)");

	chartGroup.selectAll("rect")
					.data(data)
					.enter().append("rect")
						.attr('x',function(d,i) { return (barwidth+spacing)*i; })
						.attr('y',function(d,i) { return y(d);})
						.attr('width',barwidth)
						.attr('height',function(d){ return height-y(d);})
						.attr('fill','steelblue');
	chartGroup.append('g').call(yAxis);
}
