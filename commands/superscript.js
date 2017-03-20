const { superscriptize } = require('../utils')

exports.run = function (client, msg, args) {
  const text = superscriptize(args.join(' '))

  if (text.length > 0) {
    msg.reply(`**${text}**`)
  } else {
    msg.reply('please enter some text!')
  }
}
