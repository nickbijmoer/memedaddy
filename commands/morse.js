const { morse } = require('../utils')

exports.run = function (client, msg, args) {
  const text = morse(args.join(' '))

  if (text.length > 0) {
    msg.reply(`**${text}**`)
  } else if(text.length > 2000){
    msg.reply('too long of a message, boi')
  } else {
    msg.reply('please enter some text!')
  }

}
