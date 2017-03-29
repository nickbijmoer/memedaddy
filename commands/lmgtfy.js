exports.run = function (client, msg, args, config, Discord) {
  const query = encodeURI(args.join(' '))
  const embed = new Discord.RichEmbed()

    .setColor('#2D7FFF')
    .setDescription(`[Click here](<http://lmgtfy.com/?q=${query}>) to look up "${args.join(' ')}" on Google.`)
  msg.channel.sendEmbed(embed, { disableEveryone: true })
}
