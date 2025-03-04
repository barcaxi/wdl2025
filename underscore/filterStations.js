$("document").ready(function() {

	function getCountyStations(element)	{
		if(element.county=="Donegal")
			return true;
	}

	var countyStations = _.filter(stations,getCountyStations);

	_.each(countyStations, function(element){
		$("#data").append(element.name + "<br>");			
	});

});
