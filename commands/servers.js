exports.run = function (client, msg, args, config) {
  if (msg.author.id === config.owner) {
    msg.channel.sendMessage(client.guilds.array())
  } else {
    msg.reply('you don\'t have permission to use this command, noob.')
  }
}

exports.help = '**Usage: `pls servers`**\n[Owner Only] Display the servers Markos is in.**'
