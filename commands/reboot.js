
exports.run = function (client, msg, args, config) {
    if (msg.author.id === config.owner) {
        msg.react('😩')
        msg.channel.sendmessage("tfw Melmsie reboots me").then(() => {
            process.exit()
        })
    }
}

exports.help = "Reboots the bot in case of an error [Bot owner only]"