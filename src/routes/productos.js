const express = require('express');
const router = express.Router();

const productController = require('../controllers/productosController')

router.get('/',productController.index)

router.get('/detalle/:id/:descripcion?',productController.detalle)

module.exports = router