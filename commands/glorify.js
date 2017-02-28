const axios = require('axios')

exports.run = function (client, msg, args) {
  let name = args.join(' ')

  axios('http://api.icndb.com/jokes/random', {
    params: {
      escape: 'javascript',
      firstName: name
    },

    contentType: 'json'
  })
    .then(({ data }) => msg.channel.sendMessage(data.value.joke))
    .catch(err => {
      console.error(err)

      msg.channel.sendMessage('The API done fucked up!')
    })
}

exports.help = "**Usage: `pls glorify <user>`**\nWill replace chuck norris' name with tagged user in a Norris fact."
