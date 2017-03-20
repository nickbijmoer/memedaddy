const { randomInArray } = require('../utils')
const arrays = require('../assets/arrays.json')

const shitpostReactions = [
  '🇩',
  '🇦',
  '🇳',
  '🇰'
]

exports.run = async function (client, msg) {
  msg.react('👌')

  const shitpost = await msg.channel.sendMessage(randomInArray(arrays.copy))

  for (const reaction of shitpostReactions) {
    await shitpost.react(reaction)
  }
}
