exports.run = function (client, msg, args, config, Discord) {
  const embed = new Discord.RichEmbed()
    .setColor('#7d5bbe')
    .setTitle(`Support Melmsie`)
    .setDescription('Patreon donations will help pay for VPS time, to keep the bots alive and well.')
    .addField('Patreon Link', "[Thank you!](https://www.patreon.com/melmsie)")
    .addField('$1/mo', "- Supporter Rank")
    .addField('$5/mo', "- Supporter Rank\n- Custom Command of your choosing")
    .addField('$10/mo', "- Supporter Rank\n- Custom Command of your choosing\n- Your own __custom__ bot")
   
  msg.channel.sendEmbed(embed, {
    disableEveryone: true
  })
}
