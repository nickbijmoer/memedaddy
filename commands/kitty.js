const axios = require('axios')

const { delayPromise, randomInArray } = require('../utils')
const arrays = require('../assets/arrays.json')

exports.run = function (client, msg) {
  const randomCat = randomInArray(arrays.cat)

  msg.channel.sendMessage(randomCat)
    .then(delayPromise(2500))
    .then(msg => {
      msg.delete()

      return axios('http://random.cat/meow')
    })
    .then(({ data }) => msg.channel.sendFile(data.file))
    .catch(err => {
      console.error(err)

      msg.reply('oh no, the kitty ran away!')
    })
}

exports.help = '**Usage: `pls kitty`**\nAll da kitteh pics'
