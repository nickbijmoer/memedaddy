exports.run = function (client, msg, args, config, Discord) {

    client.guilds.get(msg.guild.id).fetchMembers()
        .then(x => {
            let c = (x.members.filter(guildMember => guildMember.user.bot).array().length)
            let d = msg.guild.memberCount - c
            const embed = new Discord.RichEmbed()
                .setAuthor('Server info for ' + msg.guild.name)
                .setColor('#2D7FFF')
                .setThumbnail(msg.guild.iconURL)
                .setDescription('do `pls userinfo @user` to see detailed user info')
                .addField('Guild Owner', msg.guild.owner.user.username + '#' + msg.guild.owner.user.discriminator)
                .addField('Members', d, true)
                .addField('Bots', c, true)
                .addField('Guild Region', msg.guild.region)
                .addField('Creation Date', msg.guild.createdAt.toString(), true)
                .addField('Emojis', msg.guild.emojis.size > 0 ? msg.guild.emojis.map(d => d.toString()).join(' ') : 'None')
                .addField('Roles', msg.guild.roles.size > 0 ? msg.guild.roles.map(d => d.name).join(', ') : 'None')
            try {
                msg.channel.sendEmbed(embed, {
                    disableEveryone: true
                })
            } catch (e) {
                console.log(e)
                msg.reply('there was an issue running this command.')
            }
        })
}
