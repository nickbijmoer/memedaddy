exports.run = function (client, msg, args, config, Discord) {
  const embed = new Discord.RichEmbed()
    .setTitle('Melmsie\'s Server')
    .setAuthor('About Markos and Melmsie')
    .setColor('#3676b3')
    .setDescription('Dat meme bot doe')
    .setFooter('Need to see my commands? Do pls help')
    .setURL('https://discord.gg/3GNMJBG')

    .addField('About Melmsie', `Melmsie is a freelance web developer and a gamer at heart. You can catch him playing Overwatch most of the time.`)
    .addField('About Markos', `Markos is a German name, because Melmsie speaks a fair amount of German, and just loves that name. Deal with it.`)
    .addField('Upcoming Features', `Voice memes, cleverbot, and more shitposting`)
    .addField('Find a bug?', `Do \`pls bug <message to be sent>\``)

  msg.channel.sendEmbed(embed, { disableEveryone: true })
}

exports.help = '**Usage: `pls info`**\nUse this command to see some info about Markos and Melmsie.'
