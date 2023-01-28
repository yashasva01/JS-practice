const fs = require('fs');

const path = './2.txt';

// fs.readFile(path, 'utf-8', (error, output)=> {
//     if(error){
//         console.log(error);
//     }
//     console.log(output.toString());
// });


let myPromise = (path) => {
    return new Promise ((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, output)=> {
            if(error){
                return reject(error);
            }
            else if(isNaN(Number(output))){
                return reject({message: `Invalid input: ${output}`});
            }
            return resolve(output);
        });
    });
};

let totalProduct = 1;

myPromise(path)
    .then((number)=> {
        totalProduct *= number;
        return myPromise('./3.txt');
    })
    .catch((err)=> {throw err;})
    .then((number) => {
        totalProduct *= number;
        return myPromise('./4.txt');
    })
    .catch((err)=> {throw err;})
    .then((number) => {
        totalProduct *= number;
        return myPromise('./5.txt');
    })
    .catch((err)=> {throw err;})
    .then((number) => {
        totalProduct *= number;
        return myPromise('./6.txt');
    })
    .then((number) => {
        totalProduct *= number;
        console.log(totalProduct);
    })
    .catch((err) => {console.log(err.message);});