const axios = require('axios')

exports.run = function (client, { channel }) {
  axios('http://api.yomomma.info/')
    .then(({ data }) => channel.sendMessage(data.joke))
    .catch(err => {
      console.error(err)

      channel.sendMessage('The API done broke itself')
    })
}

exports.help = '**Usage: `pls mama`**\nYo mama uses this command SO MUCH...'
