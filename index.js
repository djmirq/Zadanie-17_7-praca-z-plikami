var fs = require('fs');
//var StatMode = require('stat-mode');
var colors = require('colors');

//fs.stat('./cat.jpg', function(err, stats) {
//    var statMode = new StatMode(stats);
//    console.log(statMode.toString());
//});
 
//fs.readFile('./tekst.txt', function(err, data) {
//    console.log(data);
//});

//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log(data);
//});

//fs.writeFile('./tekst.txt', 'Tekst, który zapiszemy w pliku tekst.txt', function(err) {
//    if (err) throw err; // jeśli pojawi się błąd, wyrzuć wyjątek
//    console.log('Zapisano!');
//});
 
//fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//    console.log('Dane przed zapisem!'.blue);
//    console.log(data);
//    fs.appendFile('./tekst.txt', '\nA tak wyglądają po zapisie!', function(err) {
//        if (err) throw err;
//        console.log('Zapisano!'.blue);
//        fs.readFile('./tekst.txt', 'utf-8', function(err, data) {
//            console.log('Dane po zapisie'.blue)
//            console.log(data);
//        });
//    });
//});

fs.readdir('.', 'utf-8', function(err, files) {
	files.forEach(function(entry) {
	if (err) throw err;
		fs.appendFile('./tekst.txt', entry + '\r\n', function(err) {
			if (err) throw err;
		});
	});
	console.log('Zapisano!'.red);	
});
	

