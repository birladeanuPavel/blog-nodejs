(() => {
    "use strict";

    let router = require('express').Router(),
        fs = require('fs');


    router.route('/')
    .get((req, res) => {
        res.sendfile('./public/index.html')
        // fs.readFile(__dirname + '/index.html', function(err, data) {
        //     if (err) {
        //         res.writeHead(500);
        //         return res.end('Error loading index.html');
        //     } else {
        //         console.log('Here');
        //         res.writeHead(200);
        //         res.end(data);
        //     }
        // });
        });

    module.exports = router;
})();