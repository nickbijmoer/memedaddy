var trump = require('react-trump')
exports.run = function (client, msg, args, config, Discord) {

    var question = args.join(' ')
    var exclamationPoints = 1
    var includeQuestion = false

    var answer = trump.answer({
        question,
        exclamationPoints,
        includeQuestion
    })

    const embed = new Discord.RichEmbed()
        .setTitle(' ')
        .setAuthor(msg.author.username + ' asked Trump:', msg.author.avatarURL)
        .setDescription(question)
        .setColor('#3676b3')
        .addField('President Trump responds with:', answer)

    msg.channel.sendEmbed(embed, {
        disableEveryone: true
    })

}
