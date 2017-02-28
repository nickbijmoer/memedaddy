exports.run = function (client, msg, args, config) {
  if (msg.author.id === config.owner) {
    msg.react('👌')

    msg.channel.sendMessage('tfw Melmsie reboots me 👀')
      .then(() => process.exit())
  } else {
    msg.channel.sendMessage("tfw you don't have permission to use this command :fire:")
  }
}

exports.help = '**Usage: `pls reboot`**\n[Melmsie Only] Will restart Markos.'
