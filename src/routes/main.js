const express = require('express');
const router = express.Router()

router.get('/', function(req,res){
    res.send('Bienvenidos a mi Sitio Web')
})

module.exports = router