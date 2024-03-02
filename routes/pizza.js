const express = require('express')
const PizzaController = require('../controllers/pizza')
const router = express.Router();
router.get('/', PizzaController.findAll);
router.post('/', PizzaController.create);
module.exports = router     