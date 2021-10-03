const Router = require('express').Router()
const controller = require('../controllers/DatabaseController')

Router.put('/update', controller.updateMsg)
Router.get('/get', controller.readMsg)
Router.get('/getreq', controller.readReq)
Router.put('/updatereq', controller.updateReq)
module.exports = Router
