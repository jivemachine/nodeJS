// import modules
const rp = require('request-promise');

// pull JSON data from app 
rp('https://lukes-projects.herokuapp.com/v1/hiphop')
    .then(function (data) {
        let albums = JSON.parse(data);

        // for loop extracts album titles and puts them into array 'album'
        let album = [];
        let numAlbums = albums.result.length;
        for(let i = 0; i < numAlbums; i++) {
            album.push(albums.result[i].title); 
        }
    })
    .catch(function (err) {
        console.log(err);
    });