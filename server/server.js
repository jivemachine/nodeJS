// importing modules
const path = require('path');
const fs = require('fs');
const request = require('request');

// setting data path
let dataPath = path.join(__dirname, '../chirps.json');

// creating array of 5 chirp objects object
let chirpObj = [
    {
        "chirp": "chirp one"
    },
    {
        "chirp": "chirp two"
    },
    {
        "chirp": "chirp three"
    },
    {
        "chirp": "chirp four"
    },
    {
        "chirp": "chirp five"
    }
]

// writing object to chirps.json 

let file = fs.createWriteStream(dataPath);
file.on('error', err => {
    console.log(err);
});
chirpObj.forEach(function (chirps) {
    file.write(chirps.chirp + '\n');
});
file.end();
