exports.run = function (client, msg, args, config) {
  
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
