const Router = require('express').Router()
const controller = require('../controllers/AuthController')

Router.get('/login', controller.login)

module.exports = Router
