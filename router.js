const express = require('express'); //import express
const bodyParser = require('body-parser');

const router = express.Router();


router.get('/', (req, res)=>{ 
    res.status(200); 
    res.json(
        {
            "message": "hello world"
        }
    )
});


module.exports = router;