// import modules
const rp = require('request-promise');
const fs = require('fs');
const path = require('path');


// pull JSON data from app 
rp('https://lukes-projects.herokuapp.com/v1/hiphop')
    .then(function (data) {
        let albumsData = JSON.parse(data);

        // initalizing number of iterations
        let numAlbums = albumsData.result.length;

        // for loop drives code
        for (let i = 0; i < numAlbums; i++) {
            // create custom file path
            let dataPath = path.format({
                dir: 'downloads',
                base: albumsData.result[i].id + '.html',
            });
            // save filenames
            fs.openSync(dataPath, 'w');

            let link = albumsData.result[i].thumbnail_image;

            // save thumbnail img
            let img = '<a href="' + link + '"><img style="display: block; margin-left: auto; margin-right: auto; border: 1px solid #ddd; border-radius: 4px; padding: 5px; width: 150px;" src="'+link+'"></img></a>';

            // // write img to html file
            fs.appendFileSync(dataPath, img);
        }
    })
    .catch(function (err) {
        console.log(err);
    });