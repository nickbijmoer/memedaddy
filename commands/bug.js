exports.run = function (client, msg, args, config) {
  if (msg.author.id === '180093157554388993') {
    return msg.reply('you have been banned from using this feature.')
  } else {
    try {
      if (args.length === 0) {
        msg.reply('you need to include a message to send!')
      } else {
        msg.react('👌')

        const { username, discriminator, id } = msg.author
        const report = args.join(' ')

        client.users.get(config.owner)
          .sendMessage(`**${username}#${discriminator} (${id}):**\n${report}`)

        msg.reply('thanks for bugging Melmsie with a bug request!')
      }
    } catch (err) {
      console.error(err)
    }
  }
}

exports.help = '**Usage: `pls bug <message to send>`**\nUse this command to submit a bug report to Melmsie.'
