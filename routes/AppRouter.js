const Router = require('express').Router()
const DatabaseRouter = require('./DatabaseRouter')
const AuthRouter = require('./AuthRouter')
Router.use('/database', DatabaseRouter)
Router.use('/auth', AuthRouter)
module.exports = Router
