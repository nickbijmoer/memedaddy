exports.run = function (client, msg, args) {
    var name
    if (args.length >= 1) {
        name = args
        if (name.length === 1) {
            name = ['', name]
        }
    } else {
        name = ['', 'Melmsie']
    }
    var request = require('request')
    request('http://api.icndb.com/jokes/random?escape=javascript&firstName=' + name[0] + '&lastName=' + name[1], function (error, response, body) {
        if (!error && response.statusCode === 200) {
            try {
                JSON.parse(body)
            } catch (e) {
                msg.channel.sendMessage('The API done fucked up!')
                return
            }
            var joke = JSON.parse(body)
            msg.channel.sendMessage(joke.value.joke)
        }
    })
}

exports.help = "**Usage: \`pls glorify <user>\`**\nWill replace chuck norris' name with tagged user in a Norris fact."