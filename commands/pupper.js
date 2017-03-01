const axios = require('axios')

const { randomInArray, delayPromise } = require('../utils')
const arrays = require('../assets/arrays.json')

exports.run = function (client, { channel }) {
  channel.sendMessage(randomInArray(arrays.pup))
    .then(delayPromise(2500))
    .then(msg => {
      msg.delete()

      return axios('http://random.dog/woof')
    })
    .then(({ data }) => channel.sendFile(`http://random.dog/${data}`))
    .catch(err => {
      console.error(err)

      channel.sendMessage('The pupper ran away :(')
    })
}

exports.help = '**Usage: `pls pupper`**\nSee the cutest thing since sliced bread AKA a pupper.'
