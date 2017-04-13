exports.run = function (client, msg, args, config, Discord) {

    const embed = new Discord.RichEmbed()
        .setColor('#7d5bbe')
        .setTitle(client.user.username)
        .setDescription(`Prefix is \`${config.prefix}\`.`)
        .addField('Example:', `${config.prefix} shitpost`)
        .addField('Commands', `do \`${config.prefix} commands\` to see a full list of commands.`)
        .addField('Github', `The repo for this bot can be found [here](https://github.com/melmsie/memedaddy).`)
        .addField('Support Server', `Come to [this server](https://discord.gg/3GNMJBG) to get help or just hang out.`)

    msg.channel.sendEmbed(embed, {
        disableEveryone: true
    })

}
