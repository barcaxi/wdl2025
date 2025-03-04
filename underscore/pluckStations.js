$("document").ready(function() {

	var stationNames=_.pluck(stations, "name");

	_.each(stationNames,function(element){
		$("#data").append(element + "<br>");
	});
});
