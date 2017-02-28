exports.run = function (client, msg, args) {
  const query = encodeURI(args.join(' '))

  msg.channel.send(`<http://lmgtfy.com/?q=${query}>`)
}

exports.help = '**Usage: `pls lgmtfy <search query>`**\nSick of someone asking dumb or easily googled questions? Use this to educate them!'
