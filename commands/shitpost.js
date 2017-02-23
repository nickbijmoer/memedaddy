const arrays = require('./arrays.json')

exports.run = function (client, msg) {
    //usage: 'shitpost - Displays some 👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌',
    msg.react("✅")
    msg.channel.sendMessage(arrays.copy[Math.floor(Math.random() * arrays.copy.length)]).then(m => {
      m.react("🔥")
      m.react("💯")
      m.react("👌")
      m.react("👀")
      m.react("💦")
      m.react("👅")
      m.react("💩")
      m.react("🖕")
      m.react("👽")
      m.react("🍆")
      m.react("😂")
      m.react("👍")
      m.react("✔")
      m.react("🍪")
      m.react("💀")
      m.react("🔝")
      m.react("❌")
    })
}