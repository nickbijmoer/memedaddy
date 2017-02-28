exports.run = function (client, msg, args) {
  const nicknames = msg.mentions.users.array()
    .map(m => m.username)
    .join(' and ')

  const query = encodeURI(nicknames)

  msg.channel.sendMessage(`<http://ripme.xyz/${query}>`)
}

exports.help = '**Usage: `pls rip <user>` (Do not tag the user, just type their name.**\nInstead of just typing rip when someone gets rekt, use this!'
