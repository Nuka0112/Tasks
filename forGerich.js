const { table } = require('console');

function forGerich(table, a, file1, file2){
const fs = require('fs');
const readline = require('readline');

let rl = readline.createInterface({
	input: fs.createReadStream(file1), 
});

let index = 0;
let headers = [];
let headers1 = [];
let arr = [];
let arr1 = [];

rl.on('line', function(line) { 
	if (index === 0) {
		headers.push(line);
		headers1 = headers.join(a).split(' ');
	}
	else {
		arr.push(line);
		arr1 = arr.join(a).split(' ').map(item => '\'' + item +'\'');

		fs.appendFile(file2, `INSERT INTO ${table} (${headers1}) VALUES (${arr1}) \n`,
		(err) => {
			if (err) throw err;
			console.log('Data has been added!');
	})}
	
	arr = [];
	index++;
})
}