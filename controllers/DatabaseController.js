const { Msg } = require('../models')

const updateMsg = async (req, res) => {
  try {
    let msg = await Msg.findByPk(1)
    console.log(req.body)
    console.log(msg)
    msg.message = req.body.message
    await msg.save()
    return res.send({ message: 'Message updated' })
  } catch (err) {
    throw err
  }
}

const updateReq = async (req, res) => {
  try {
    let msg = await Msg.findByPk(2)

    console.log(msg)
    msg.message = req.body.message
    await msg.save()
    return res.send({ message: 'request updated' })
  } catch (err) {
    throw err
  }
}

const readMsg = async (req, res) => {
  try {
    let msg = await Msg.findByPk(1)

    await msg.save()
    return res.send({ msg })
  } catch (err) {
    throw err
  }
}

const readReq = async (req, res) => {
  try {
    let msg = await Msg.findByPk(2)

    await msg.save()
    return res.send({ msg })
  } catch (err) {
    throw err
  }
}

module.exports = {
  updateMsg,
  readMsg,
  readReq,
  updateReq
}
