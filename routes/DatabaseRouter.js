const Router = require('express').Router()
const controller = require('../controllers/DatabaseController')

Router.put('/update', controller.updateMsg)

module.exports = Router
