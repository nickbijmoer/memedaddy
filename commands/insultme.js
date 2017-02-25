exports.run = function (client, msg, args) {
    var request = require('request')
    request('http://quandyfactory.com/insult/json/', function (error, response, body) {
      if (!error && response.statusCode === 200) {
        try {
          JSON.parse(body)
        } catch (e) {
          msg.channel.sendMessage('The API returned an unconventional response.')
          return
        }
        var fancyinsult = JSON.parse(body)
        if (args === '') {
          msg.reply(fancyinsult.insult)
        } else {
          msg.reply(fancyinsult.insult)
        }
      }
    })
}

exports.help = "**Usage: \`pls insultme\`**\nUse this command to let Markos use some old timey insults on you."