const { randomInArray } = require('../utils')
const arrays = require('../assets/arrays.json')

exports.run = function (client, msg) {
  msg.react('👌')

  msg.channel.sendMessage(randomInArray(arrays.copy))
    .then(m => m.react('🇩')
    .then(_ => m.react('🇦'))
    .then(_ => m.react('🇳'))
    .then(_ => m.react('🇰'))
    .then(_ => m.react('🔥'))
    .then(_ => m.react('💯'))
    .then(_ => m.react('👌'))
    .then(_ => m.react('👀'))
    .then(_ => m.react('💩'))
    .then(_ => m.react('🍆')))
}

exports.help = '**Usage: `pls shitpost`**\n👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌 thats ✔ some good👌👌shit right👌👌there👌👌👌 right✔there ✔✔if i do ƽaү so my self 💯 i say so 💯 thats what im talking about right there right there (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ) mMMMMᎷМ💯 👌👌 👌НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit'
