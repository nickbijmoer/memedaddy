const leet = require("1337")

exports.run = function (client, msg, args) {
    //usage: 'leet <message> - Displays whatever the <message> is, in 1337 form.',
    msg.reply(leet(args.join(" ")));
}

exports.help = "Translates your message into 1337 speak."