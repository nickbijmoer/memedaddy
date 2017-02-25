exports.run = function (client, msg, args, config) {
    if (msg.author.id === "180093157554388993") {
        msg.reply("You have been banned from using this feature.")
        return;
    } else {
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

}

exports.help = "**Usage: \`pls bug <message to send>\`**\nUse this command to submit a bug report to Melmsie."