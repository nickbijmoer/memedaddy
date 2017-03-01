exports.run = function (client, msg, args) {
    var qs = require('querystring')
    var resolve = []
    var skipped = false
    if (msg.mentions.length > 0) {
        for (var m of msg.mentions) {
            if (m.id !== bot.User.id) {
                if (resolve[0] === undefined) {
                    resolve[0] = m.username
                } else {
                    resolve[0] += ' and ' + m.username
                }
            } else {
                skipped = true
            }
        }
    } else if (args) {
        resolve[0] = args
    }
    if (skipped === true && msg.mentions.length === 1 && args) {
        resolve[0] = args
    }
    msg.channel.sendMessage('http://ripme.xyz/' + qs.stringify(resolve).substr(2))
}

exports.help = "**Usage: \`pls rip <user>\` (Do not tag the user, just type their name.**\nInstead of just typing rip when someone gets rekt, use this!"