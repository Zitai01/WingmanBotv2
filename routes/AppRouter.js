const Router = require('express').Router()
const DatabaseRouter = require('./DatabaseRouter')

Router.use('/database', DatabaseRouter)
module.exports = Router
