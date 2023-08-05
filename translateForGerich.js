const fs = require('fs');
const readline = require('readline');
const path = require ('path');
const {readdir} = require('fs/promises');

//__dirname

let dir = 'D:/node/modules/';
let name = 'translation';
let text = 'actors';

function listActors(directory, name, text){
    const files = readdir(directory); //чтение каталога возвращает массив имен
        files.then(function(result) { //почему через then? без него __dirname
            result.filter(file => {
                if(file.includes(name)){
                let nameFile = path.resolve(file) //возвращает строку с абс. путем
                let rl = readline.createInterface({
                    input: fs.createReadStream (nameFile)
                }) 

                    let arr = [];

                    rl.on('line', function(line) { 
	                if (line.includes(text)){
		                arr.push(line);
		                fs.appendFile('test2.txt', `${line} \n`,
                        function (err) {
                                if (err) throw err;
                                console.log('Data has been added!');
                            })
		            }   
                })
                }
            })
        })
        }

        listActors(dir, name, text);