exports.run = function (client, msg, args, config, Discord) {
    var gagScraper = require('9gag-scraper')
    new gagScraper("trending").getGags(function (error, data) {

        const embed = new Discord.RichEmbed()
            .setColor('#3676b3')
            .setTitle(data.gags[0].title)
            .setFooter('Powered by 9GAG')
            .setImage(data.gags[0].image)
            .setURL(data.gags[0].url)


        msg.channel.sendEmbed(embed, {
            disableEveryone: true
        })
    });


}
