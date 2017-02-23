module.exports = {
    usage: 'invite - Markos will DM you a link to invite him to a server you own/have perms to.',
    run: (client, msg, command) => {
        msg.channel.sendMessage("Ok I'll DM you a link, bb");
        msg.author.sendMessage("Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink: \nhttps://discordapp.com/oauth2/authorize?client_id=270904126974590976&scope=bot&permissions=67628096");
    }
}