exports.run = function (client, msg, args, config) {
  if (msg.author.id === config.owner) {
    msg.channel.sendMessage(`:ping_pong: ${(client.ping).toFixed(0)} ms`)
  } else {
    msg.channel.sendMessage(':ping_pong: Pong!')
  }
}

exports.help = '**Usage: `pls ping`**\nClassic.'
