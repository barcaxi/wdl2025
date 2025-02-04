var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'd3'
});

connection.connect(function(err){
	if(err) throw err;
	console.log(`Sucessfully connected to MySQL database d3`);
});
exports.getData = function(req,res){
	connection.query("SELECT * FROM d3table", function(err, rows, fields) {
	  if (err) throw err;
	  res.send(JSON.stringify(rows));	  
	});	
}