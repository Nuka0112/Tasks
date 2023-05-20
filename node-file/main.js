let fs = require("fs");
 
let word = '[error]';
let data = fs.readFileSync('file.txt');
let arr = data.toString().split('\n');

function filterItems(arr1, query) {
	return arr1.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
 }
 
 console.log(filterItems(arr, "error"));

//arr.forEach(el => el.includes(word) ? console.log(el) : false);
//console.log(arr.filter((el) => el.includes(word)));
//console.log(arr.filter((el) => /error/.test(el)));
/*for (let i = 0; i <= arr.length; i++) {
	if (/error/.test(arr[i])) { console.log(arr[i]) };
}
arr.forEach(el => /error/.test(el) ? console.log(el) : false);*/