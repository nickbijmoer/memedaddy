const axios = require('axios')

const { randomInArray } = require('../utils')
const arrays = require('../assets/arrays.json')

exports.run = async function (client, msg) {
  const notice = await msg.channel.sendMessage(randomInArray(arrays.cat))
  setTimeout(async () => {
    notice.delete()
    try {
      const { data: { file } } = await axios('http://random.cat/meow')
      msg.channel.sendFile(file)
    } catch (err) {
      console.error(err)
      msg.reply('oh no, the kitty ran away!')
    }
  }, 2500)
}
