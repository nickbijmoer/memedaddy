const leet = require("1337")

exports.run = function (client, msg, args) {
    try {
        if (args.length === 0) {
            msg.reply('You need to include a message to leet!')
        } else {
            msg.react("👌")
            msg.reply(leet(args.join(" ")));
        }
    } catch (e) {
        console.log(e)
    };
}

exports.help = "**Usage: \`pls leet <message to leet>\`**\nThis turns your text into 1337 5p34k"

