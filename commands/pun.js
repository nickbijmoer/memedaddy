const arrays = require('./../arrays.json')
exports.run = function (client, msg) {
        msg.channel.sendMessage(arrays.pun[Math.floor(Math.random() * arrays.pun.length)])
}
exports.help = "**Usage: \`pls pun\`**\nWill return a random pun."