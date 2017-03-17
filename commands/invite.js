exports.run = function (client, msg, command) {
  msg.channel.sendMessage('Oh, so you want me to ~~shitpost~~ **meme** on another server?\nOk I\'ll DM you a link, bb')
/* eslint-disable no-irregular-whitespace */
  msg.author.sendMessage(`Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink:\nhttps://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=67628096`)
/* eslint-enable no-irregular-whitespace */
}

