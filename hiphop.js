// import modules
const rp = require('request-promise');

rp('https://lukes-projects.herokuapp.com/v1/hiphop')
    .then(function (htmlString) {
        // console.log(body[0].title);
        console.log(htmlString);
    })
    .catch(function (err) {
        console.log(err);
    });


    // JSON.parse(body).data.children.forEach(item => {
    //     fs.appendFileSync(dataPath, item.data.title + '\n');
    // });