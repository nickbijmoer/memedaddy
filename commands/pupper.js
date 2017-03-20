const axios = require('axios')

const { randomInArray, delayPromise } = require('../utils')
const arrays = require('../assets/arrays.json')

exports.run = async function (client, msg) {
  const notice = await msg.channel.sendMessage(randomInArray(arrays.pup))

  setTimeout(async () => {
    notice.delete()

    try {
      const { data } = await axios('http://random.dog/woof')

      msg.channel.sendFile(`http://random.dog/${data}`)
    } catch (err) {
      console.error(err)

      msg.reply('the pupper ran away :(')
    }
  }, 2500)
}
