const axios = require('axios')

exports.run = async function (client, msg, args) {
  let name = args.join(' ')

  try {
    let { data: { value } } = await axios('http://api.icndb.com/jokes/random', {
      params: {
        escape: 'javascript',
        firstName: name,
        lastName: ''
      },

      contentType: 'json'
    })

    msg.channel.sendMessage(value.joke)
  } catch (err) {
    console.error(err)

    msg.reply('the API done fucked up!')
  }
}

exports.help = "**Usage: `pls glorify <user>`**\nWill replace chuck norris' name with tagged user in a Norris fact."
