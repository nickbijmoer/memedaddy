var trump = require('react-trump');
exports.run = function (client, msg, args, config, Discord) {

    var question = args.join(' '); // omitting the question mark will add it anyways 
    var exclamationPoints = 1; // how serious the answer is 
    var includeQuestion = false; // if you want to include the question in response 

    var answer = trump.answer({
        question,
        exclamationPoints,
        includeQuestion
    });

    const embed = new Discord.RichEmbed()
        .setTitle(' ')
        .setAuthor(' ')
        .setColor('#3676b3')

        .addField(msg.author.username, question)
        .addField('President Trump', answer)

    msg.channel.sendEmbed(embed, {
        disableEveryone: true
    })


}

exports.help = '**Usage: `pls asktrump <message to ask trump>`**\nUse this command to submit a question to President Trump.'
