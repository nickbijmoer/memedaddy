const Jimp = require('jimp')
const path = require('path')

const assetsPath = path.join(__dirname, '../assets/')

exports.run = function (client, { channel, mentions }, args) {
  if (mentions.users.size !== 1) {
    return channel.sendMessage('You must mention **one** user!')
  }

  const firstMention = mentions.users.first()

  channel.sendMessage(':gear: Generating... please wait.')
    .then(msg => {
      Promise.all([
        Jimp.read(firstMention.displayAvatarURL),
        Jimp.read(path.join(assetsPath, 'triggered.jpg')),
        Jimp.read(path.join(assetsPath, 'red.png'))
      ])
        .then(([ avatar, triggered, red ]) => {
          red.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
          triggered.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)

          red.opacity(0.2)

          avatar.composite(red, 0, 0)
                .composite(triggered, 0, avatar.bitmap.height - triggered.bitmap.height)

          avatar.getBuffer(Jimp.MIME_PNG, (err, image) => {
            msg.delete()

            if (err) {
              throw new Error(err)
            }

            channel.sendFile(image, 't r i g g e r.png', `${firstMention.username} is **triggered**`)
          })
        })
        .catch(err => {
          console.error(err)

          msg.edit(':warning: Failed to generate image')
        })
    })
}

exports.help = '**Usage: `pls trigger`**\nMakes the tagged user angry. *Does not work with gifs*'
