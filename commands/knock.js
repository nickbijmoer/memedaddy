exports.run = function (client, msg) {
    var knockknock = require('knock-knock-jokes')
    msg.channel.sendMessage(knockknock())
}
