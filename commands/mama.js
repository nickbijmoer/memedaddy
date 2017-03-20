const axios = require('axios')

exports.run = async function (client, msg) {
  try {
    const { data: { joke } } = await axios('http://api.yomomma.info/')
    msg.reply(joke)
  } catch (err) {
    console.error(err)
    msg.reply('the API done broke itself')
  }
}
