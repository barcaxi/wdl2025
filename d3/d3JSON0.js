window.onload = function() {
    var svg = d3.select("body").append("svg")
                               .attr("width",300)
                               .attr("height",200);                              
    
    d3.json("http://localhost/d3/numbers.json").then(function(dataset)
    {
        console.log(dataset);
        document.getElementById('code').innerHTML=`
        [
            {"value":100},
            {"value":200},
            {"value":300}
        ]`;
    });
}
