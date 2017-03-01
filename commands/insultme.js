const axios = require('axios')

exports.run = function (client, msg, args) {
  axios('http://quandyfactory.com/insult/json')
    .then(({ data }) => msg.reply(data.insult))
    .catch(err => {
      console.error(err)

      msg.channel.sendMessage('The API returned an unconventional response.')
    })
}

exports.help = '**Usage: `pls insultme`**\nUse this command to let Markos use some old timey insults on you.'
