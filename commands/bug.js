exports.run = function (client, msg, args, config) {
    try {
        if (args.length === 0) {
            msg.reply('You need to include a message to send!')
        } else {
            msg.react("👌")
            client.users.get(config.owner).sendMessage("**" + msg.author.username + '#' + msg.author.discriminator + " (" + msg.author.id + ")" + ":**\n" + args.join(" "));
            msg.reply('Thanks for bugging Melmsie with a bug request!');
        }
    } catch (e) {
        console.log(e)
    };
}

exports.help = "**Usage: \`pls bug <message to send>\`**\nUse this command to submit a bug report to Melmsie."