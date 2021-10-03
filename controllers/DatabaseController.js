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
module.exports = {
  updateMsg
}
