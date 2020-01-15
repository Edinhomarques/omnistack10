const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchControoler = require('./controllers/SearchController')
const routes = Router();

routes.get('/devs', DevController.listDevs)
routes.post('/devs', DevController.storeDev)
routes.get('/search', SearchControoler.searchDev)

module.exports = routes