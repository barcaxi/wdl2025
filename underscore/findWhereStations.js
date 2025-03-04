$("document").ready(function() {
	
	var station=_.findWhere(stations, {name:"PhoenixPark", county:"Dublin"});
	if(station!=undefined)
		$("#data").html(station.name + ", County " + station.county);

});
