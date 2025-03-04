$("document").ready(function() {

	function findStations(element) {
		if(element.county=="Donegal")
			return true;
	}

	var station=_.find(stations, findStations);
	
	if(station!=undefined) {
		$("#data").html(`${station.name} Co ${station.county}`);
	}
});
