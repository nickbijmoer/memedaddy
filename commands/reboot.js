exports.run = async function (client, msg, args, config) {
  if (msg.author.id === config.owner) {
    msg.react('👌')

    await msg.channel.sendMessage('tfw Melmsie reboots me 👀')
    process.exit()
  } else {
    msg.channel.sendMessage("tfw you don't have permission to use this command :fire:")
  }
}

exports.help = '**Usage: `pls reboot`**\n[Melmsie Only] Will restart Markos.'
