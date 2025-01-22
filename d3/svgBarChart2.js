var data = [100,200,300, 200];

window.onload = function() {	

	document.getElementById('chart').setAttribute('width',300);
	document.getElementById('chart').setAttribute('height',data.length*60);

	for(var i=0;i<data.length;i++)
	{
		var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
		rect.setAttribute('x',0);
		rect.setAttribute('y',i*60);
		rect.setAttribute('width',data[i]);
		rect.setAttribute('height',50);
		rect.setAttribute('fill','steelblue');

		document.getElementById('chart').appendChild(rect);
	}	
}