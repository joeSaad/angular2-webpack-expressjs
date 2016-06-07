var express = require('express');
var path = require('path');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
*/


router.get('/', function(req, res, err) {
    if (err) {
        console.log('err : ' + err);
    }
    //res.sendFile('http://localhost:3000/data/main.json');


    setTimeout(()=> {
        res.sendFile('main.json', {
            root: path.join(__dirname, '../public/data')
        });
    }, 0)

    

    //console.log('__dirname : '+__dirname);


    /*setTimeout(() => {
        res.json([{
            "id": 1,
            "gender": "Male",
            "first_name": "Phillip",
            "last_name": "Morales",
            "email": "pmorales0@illinois.edu",
            "ip_address": "44.142.133.23"
        }, {
            "id": 2,
            "gender": "Male",
            "first_name": "Joseph",
            "last_name": "Tucker",
            "email": "jtucker1@hexun.com",
            "ip_address": "61.29.97.244"
        }])



    }, 2000);*/

    //res.send('responding');
});




module.exports = router;
