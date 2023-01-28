const fs = require('fs');

const path = './newFile1.txt';
const path2 = './newFile2.txt';
// fs.readFile(path, 'utf-8', (error, output) => {
//     if(error){
//         throw error;
//     }
//     console.log(output.toString());
    
//     fs.readFile(path2, 'utf-8', (error, output) => {
//         if(error){
//             throw error;
//         }
//         console.log(output.toString());
//     });
// });


let myPromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, output) => {
            if(error){
                return reject(error);
            }
            //console.log(output.toString());
            return resolve(output.toString()); 
        });
    });

};

myPromise(path)
    .then(data=> {console.log(data); return myPromise(path2)}, error=> {console.log(error.message);})
    .then(data=> {console.log(data);}, error=> {console.log(error.message);});