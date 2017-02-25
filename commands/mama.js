exports.run = function (client, msg) {
    var request = require('request')
    request('http://api.yomomma.info/', function (error, response, body) {
        if (!error && response.statusCode === 200) {
            try {
                JSON.parse(body)
            } catch (e) {
                msg.channel.sendMessage('The API done broke itself')
                return
            }
            var yomomma = JSON.parse(body)
            msg.channel.sendMessage(yomomma.joke)
        }
    })
}
exports.help = "**Usage: \`pls mama\`**\nYo mama uses this command SO MUCH..."