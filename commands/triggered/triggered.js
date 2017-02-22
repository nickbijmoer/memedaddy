const Jimp = require("jimp");


module.exports = {
    usage: 'triggered <mention user> - triggers said user',
    run: (client, msg, cmdArgs) => {
        if (msg.mentions.users.size === 0) return msg.channel.sendMessage("You must mention a user!")
        msg.channel.sendMessage(":gear: Generating... please wait.").then(mesg => {
            Jimp.read(msg.mentions.users.first().displayAvatarURL, (err, avatar) => {
                if (err) return mesg.edit(":warning: Failed to generate image")
                Jimp.read('./triggered.jpg', (err, text) => {
                    if (err) return mesg.edit(":warning: Failed to generate image")
                    Jimp.read('./red.png', (err, tint) => {
                        if (err) return mesg.edit(":warning: Failed to generate image")
                        tint.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
                        tint.opacity(0.2)
                        avatar.composite(tint, 0, 0)
                        text.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
                        avatar.composite(text, 0, avatar.bitmap.height - text.bitmap.height);
                        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                            mesg.delete()
                            msg.channel.sendFile(buffer)
                        })
                    })
                })
            })
        })
    }
}