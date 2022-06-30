const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const userController = require('./src/controllers/userController');
const {
    middlewareGlobal
} = require('./src/middlewares/middleware');

route.get('/usuario/index', middlewareGlobal, userController.index);
route.post('/usuario/showUsers', middlewareGlobal, userController.insert);
route.get('/usuario/showUsers', middlewareGlobal, homeController.select);

module.exports = route;