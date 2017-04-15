exports.run = function (client, msg, args) {
    var flip = require('flipout')
    try {
    msg.reply(flip(args.join(' ')))
    } catch (e){
        console.log(Date() + e)
        msg.reply('there was an error. Did you provide text to flip?')
    }
}
