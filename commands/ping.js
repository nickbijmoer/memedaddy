exports.run = function (client, msg, args, config) {
    //usage: 'ping - pong! (and the actual bot ping)',
    if (config.owner) {
        msg.channel.sendMessage(`:ping_pong: ${(client.ping).toFixed(0)} ms`)
    } else {
        msg.channel.sendMessage(':ping_pong: Pong!')
    }
}

exports.help = "**Usage: \`pls ping\`**\nClassic."