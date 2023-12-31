// import modules
const rp = require('request-promise');
const fs = require('fs');
const dataPath = 'favorite-albums.json';

// check if data path exists
let check = Boolean;
if (fs.existsSync(dataPath)) {
    check = true;
} else {
    check = false;
}

// if dataPath doesnt exist create it
if (check === false) {
    fs.openSync(dataPath, 'w');
};

// pull JSON data from app 
rp('https://lukes-projects.herokuapp.com/v1/hiphop')
    .then(function (data) {
        let albumsData = JSON.parse(data);

        // for loop extracts album titles and puts them into array 'album'
        let album = [];
        let numAlbums = albumsData.result.length;
        for (let i = 0; i < numAlbums; i++) {
            album.push(albumsData.result[i].title);
        };

        // write array data to 'favorite-albums.json'
        for(let i = 0; i < numAlbums; i++) {
            fs.appendFileSync(dataPath, album[i] + '\n');
        };
    })
    .catch(function (err) {
        console.log(err);
    });

