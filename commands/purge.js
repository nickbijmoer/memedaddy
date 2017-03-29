exports.run = function (client, msg, args, config, Discord) {
    let count = parseInt(args)
    const embed = new Discord.RichEmbed()
        .setColor('#2D7FFF')
        .setDescription( count + ' messages purged.')

    try {

        msg.channel.fetchMessages({
            limit: (count + 1)
        }).then((messages) => {
            messages.deleteAll()
        }).then((messages) => {
            msg.channel.sendEmbed(embed);
        })

    } catch (e) {

        msg.react('❌')
        msg.reply('there was an problem doing that, sorry.')
        console.log(e)

    }
}