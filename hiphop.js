// import modules
const rp = require('request-promise');

// pull JSON data from app 
rp('https://lukes-projects.herokuapp.com/v1/hiphop')
    .then(function (data) {
        let albums = JSON.parse(data);
        console.log(albums.result[0].title);
    })
    .catch(function (err) {
        console.log(err);
    });