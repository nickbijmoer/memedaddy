exports.run = function (client, msg, args, config, Discord) {
  const embed = new Discord.RichEmbed()
    .setTitle('Melmsie\'s Server')
    .setAuthor('About MemeDaddy and Melmsie')
    .setColor('#3676b3')
    .setDescription('Dat meme bot doe')
    .setFooter('Need to see my commands? Do pls help')
    .setURL('https://discord.gg/3GNMJBG')

    .addField('About Melmsie', `Melmsie is a freelance web developer and a gamer at heart. You can catch him playing Overwatch most of the time.`)
    .addField('About MemeDaddy', `MemeDaddy is a meme. Deal with it.`)
    .addField('Upcoming Features', `Voice memes, meme generators, and more shitposting`)
    .addField('Find a bug?', `Do \`pls bug <message to be sent>\``)

  msg.channel.sendEmbed(embed, { disableEveryone: true })
}

