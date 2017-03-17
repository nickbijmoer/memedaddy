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
    [ avatar, triggered, red ] = await Promise.all([
      Jimp.read(firstMention.displayAvatarURL),
      Jimp.read(path.join(assetsPath, 'triggered.jpg')),
      Jimp.read(path.join(assetsPath, 'red.png'))
    ])
  } catch (err) {
    console.error(err)

    return fail()
  }

  red.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
  triggered.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)

  red.opacity(0.2)

  avatar.composite(red, 0, 0)
        .composite(triggered, 0, avatar.bitmap.height - triggered.bitmap.height)

  avatar.getBuffer(Jimp.MIME_PNG, async (err, image) => {
    if (err) {
      console.error(new Error(err))

      return fail()
    }

    notice.delete()

    msg.channel.sendFile(
      image,
      't r i g g e r.png',
      `**${firstMention.username} is triggered**`
    )
  })
}

