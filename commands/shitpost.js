const { randomInArray } = require('../utils')
const arrays = require('../assets/arrays.json')

const shitpostReactions = [
  '🇩',
  '🇦',
  '🇳',
  '🇰',
  '🔥',
  '💯',
  '👌',
  '👀',
  '💩',
  '🍆'
]

exports.run = async function (client, msg) {
  msg.react('👌')

  const shitpost = await msg.channel.sendMessage(randomInArray(arrays.copy))

  for (const reaction of shitpostReactions) {
    await shitpost.react(reaction)
  }
}

exports.help = '**Usage: `pls shitpost`**\n👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit'
