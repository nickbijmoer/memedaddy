exports.run = function (client, msg, args, config, Discord) {
    var flip = require('flipout')
    msg.reply(flip(args.join(' ')))
}
