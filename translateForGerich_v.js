const fs = require('fs');
const readline = require('readline');
const path = require ('path');
const {readdir} = require('fs/promises');

//__dirname

let readFrom = 'D:/node/modules/'; // из какой папки нужно всё прочитать
let name1 = 'translation.txt';
let text1 = 'actors';

function listObjects(path){
   fs.readdir(path, (err, files) => {
    if(err) throw err;

      for (let file of files){
         fs.stat(`${path}${file}`, (errStat, status) => {
            if(errStat) throw errStat;

            if(!status.isFile()){ //status.isDerictory is not a function - 'file.txt'
               console.log('Папка: ' + file);
               listObjects(path + file); // продолжаем рекурсию
            }else{
                let dir = readFrom + file;
                listActors(dir, name1, text1);
            }
         });
      }
   });
}

listObjects(readFrom);

//как остановить процесс??

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
		                fs.appendFile('test2.txt', `${line} \n`, (err) => {
			                if (err) throw err;
			                    console.log('Data has been added!');
		            })
		            }   
                })
                }
            })
        })}
     