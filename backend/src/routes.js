const { Router } = require('express');
const DevController = require('./controllers/DevController')
const routes = Router();

routes.post('/devs', DevController.storeDev)

module.exports = routes