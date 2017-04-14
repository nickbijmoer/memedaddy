const Jimp = require('jimp')
const path = require('path')

const assetsPath = path.join(__dirname, '../assets/')

exports.run = async function (client, msg, args) {
    if (msg.mentions.users.size !== 1) {
        return msg.reply('you must mention **one** user!')
    }

    const firstMention = msg.mentions.users.first()

    const notice = await msg.channel.sendMessage(':gear: Generating... please wait.')
    const fail = () => notice.edit(':warning: Failed to generate image')

    let avatar, triggered, red

    try {
        [avatar, red] = await Promise.all([
            Jimp.read(firstMention.displayAvatarURL),
            Jimp.read(path.join(assetsPath, 'salt.png'))
        ])
    } catch (err) {
        console.error(err)

        return fail()
    }

    red.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
    let width = avatar.bitmap.width / 2
    let height = avatar.bitmap.height / 2

    red.opacity(0.8)
    red.rotate(120)
    avatar.composite(red, -width, -height)
    avatar.resize(200, 200)


    avatar.getBuffer(Jimp.MIME_PNG, async(err, image) => {
        if (err) {
            console.error(new Error(err))

            return fail()
        }

        notice.delete()

        msg.channel.sendFile(
            image,
            't r i g g e r.png',
            `**${firstMention.username} is salty**`
        )
    })
}
