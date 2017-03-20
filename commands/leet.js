const leet = require('1337')

exports.run = function (client, msg, args) {
  if (args.length === 0) {
    msg.reply('you need to include a message to leet!')
  } else {
    msg.react('👌')
    msg.reply(leet(args.join(' ')))
  }
}
