exports.run = function (client, msg) {
  msg.channel.sendMessage('Ok I\'ll DM you a link, bb')
  msg.author.sendMessage(`Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink:\nhttps://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=67628096`)
}


