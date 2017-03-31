exports.run = function (client, msg, args, config, Discord) {
    var urban = require('urban')
    search = urban(args.join(' '));

    if (search.length >= 1) {
        search.first(function (json) {
            const embed = new Discord.RichEmbed()
                .setDescription('Author: ' + json.author)
                .setAuthor('Urban Dictionary: ' + json.word)
                .setColor('#3676b3')


                .addField('Definition', json.definition)
                .addField('Example', json.example)
            msg.channel.sendEmbed(embed, {
                disableEveryone: true
            })

        });
    } else {
        search = ('asshole')
        urban.random().first(function (json) {
            const embed = new Discord.RichEmbed()
                .setDescription('Author: ' + json.author)
                .setAuthor('Urban Dictionary: ' + json.word)
                .setColor('#3676b3')

                .addField('Definition', json.definition)
                .addField('Example', json.example)
            msg.channel.sendEmbed(embed, {
                disableEveryone: true
            })

        });
    }
}
