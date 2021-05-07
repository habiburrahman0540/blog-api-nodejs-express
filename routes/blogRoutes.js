const express = require('express');
const routes = express.Router();
const {time} = require('../controllers/blogController');
routes.get('/',time);
module.exports = routes;