const fs = require('fs');

const path = './2.txt';

let myPromise = (path) => {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (error, data) => {
            if(error){
                return reject(error);
            }
            else if(isNaN(Number(data))){
                return reject({message: `Invalid input: ${data}`});
            }
            return resolve(data);
        });
    });
};

let multiplyValues = async() => {
    try{
        let val =1;
        val *= await myPromise(path); 
        val *= await myPromise('./3.txt');
        val *= await myPromise('./4.txt');
        val *= await myPromise('./5.txt');
        val *= await myPromise('./6.txt');
        return val;
    }
    catch(error){
        throw Error('this is an error');
    }
};

multiplyValues().then(val => console.log("VAL: ", val)).catch(err=> console.log(err));
