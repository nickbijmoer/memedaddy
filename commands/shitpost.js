const arrays = require('./arrays.json')

exports.run = function (client, msg) {
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

exports.help = "Displays some 👌👀👌👀👌👀👌👀👌👀 good shit go౦ԁ sHit👌"