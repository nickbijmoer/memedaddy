const arrays = require('../assets/arrays.json')
const { randomInArray } = require('../utils')

exports.run = function (client, msg) {
  msg.channel.sendMessage(randomInArray(arrays.pun))
}

exports.help = '**Usage: `pls pun`**\nWill return a random pun.'
