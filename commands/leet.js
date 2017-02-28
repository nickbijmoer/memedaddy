const leet = require('1337')

exports.run = function (client, msg, args) {
  try {
    if (args.length === 0) {
      msg.reply('you need to include a message to leet!')
    } else {
      msg.react('👌')
      msg.reply(leet(args.join(' ')))
    }
  } catch (err) {
    console.error(err)
  }
}

exports.help = '**Usage: `pls leet <message to leet>`**\nThis turns your text into 1337 5p34k'
