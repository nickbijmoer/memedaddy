
exports.run = function (client, msg, args, config) {
    if (msg.author.id === config.owner) {
        msg.react('👌')
        msg.channel.sendMessage("tfw Melmsie reboots me 👀").then(() => {
            process.exit()
        })
    } else {
        msg.channel.sendMessage("tfw you don't have permission to use this command :fire:")
    }
}

exports.help = "Reboots the bot in case of an error [Bot owner only]"