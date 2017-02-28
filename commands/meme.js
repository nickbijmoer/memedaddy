exports.run = function (client, msg, args, config) {
    const unirest = require('unirest')
    unirest.get(`https://api.imgur.com/3/g/memes/viral/${Math.floor((Math.random() * 8) + 1)}`) // 20 Memes per page, 160 Memes
        .header('Authorization', 'Client-ID ' + config.imgur)
        .end(function (result) {
            if (!result.body.data.error) {
                msg.channel.sendMessage(result.body.data[Math.floor((Math.random() * 20) + 1)].link)
            } else {
                Logger.error(result.body.data.error)
            }
        })
}

exports.help = "**Usage: \`pls meme\`**\nWill return a random image from imgur."