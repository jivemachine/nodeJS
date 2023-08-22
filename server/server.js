const path = require('path');
const fs = require('fs');

const request = require('request');

let dataPath = path.join(__dirname, '../chirps.js');

let arr = [
    "1chirp", "2chip", "3chirp", " 4chirp", "5chirp"
];

let file = fs.createWriteStream(dataPath);
file.on('error', err => {
    console.log(err);
});
arr.forEach(function(w) {
    file.write(w + '\n');
});
file.end();