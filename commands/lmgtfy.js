exports.run = function (client, msg, args) {
  const query = encodeURI(args.join(' '))
  msg.channel.send(`<http://lmgtfy.com/?q=${query}>`)
}
