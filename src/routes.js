const express= require('express');
const routes = express.Router();
const userController = require('./controllers/userControllers');

routes.get('/', userController.listAll );
routes.post('/', userController.store );
routes.post('/:id', userController.listById );
// routes.get('/query', userController.listQuery );
// routes.put('/', userController.listHeaders );

module.exports = routes;
