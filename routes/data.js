var express = require('express');
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
    //res.sendFile('data/main.json');


    setTimeout(() => {
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



    }, 20000);

    //res.send('responding');
});




module.exports = router;
