const axios = require('axios')

exports.run = async function (client, msg, args) {
  try {
    const { data } = await axios('http://quandyfactory.com/insult/json')

    msg.reply(data.insult)
  } catch (err) {
    console.error(err)

    msg.reply('the API returned an unconventional response.')
  }
}

exports.help = '**Usage: `pls insultme`**\nUse this command to let Markos use some old timey insults on you.'
