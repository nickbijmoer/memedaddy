exports.run = function (client, msg, args, config, Discord) {
    if (msg.mentions.users.size !== 1) {
        let game = ''
        if (msg.author.presence.game === null) {
            game = 'Nothing'
        } else {
            game = msg.author.presence.game.name
        }
        const userInfo = new Discord.RichEmbed()
            .setAuthor('User info for ' + msg.author.username)
            .setColor('#2D7FFF')
            .setThumbnail(msg.author.avatarURL)
            .setDescription('do `pls serverinfo` to see detailed info about the server')
            .addField('Status', msg.author.presence.status, true)
            .addField('Playing', game, true)
            .addField('Joined Server', msg.member.joinedAt)
            .addField('Created Account', msg.author.createdAt)
            .addField('Roles', msg.member.roles.size > 0 ? msg.member.roles.map(d => d.name).join(', ') : 'None')

        msg.channel.sendEmbed(userInfo, {
            disableEveryone: true
        });
    } else {
        msg.reply(' memedaddy only currently supports looking up your own info. This should be fixed by next week.')
    }

}
