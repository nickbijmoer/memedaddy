exports.run = function (client, msg, args, config, Discord) {
  const embed = new Discord.RichEmbed()
    .setTitle('Melmsie\'s Server')
    .setAuthor(`About ${client.user.username} and Melmsie`)
    .setColor('#2D7FFF')
    .setDescription('Dat meme bot doe')
    .setFooter('Need to see my commands? Do pls help')
    .setURL('https://discord.gg/3GNMJBG')

    .addField('About Melmsie', `Melmsie is a freelance web developer and a gamer at heart. You can catch him playing Overwatch most of the time.`)
    .addField('About ' + client.user.username, `MemeDaddy is a meme. Deal with it.`)
    .addField('Upcoming Features', `Voice memes, meme generators, and more shitposting`)
    .addField('Find a bug?', `Do \`pls bug <message to be sent>\``)

  msg.channel.sendEmbed(embed, { disableEveryone: true })
}

