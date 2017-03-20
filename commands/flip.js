exports.run = function (client, msg, args) {
    var flip = require('flipout')
    msg.reply(flip(args.join(' ')))
}
