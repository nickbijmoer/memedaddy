exports.run = function (client, msg, args, config, Discord) {
    var gagScraper = require('9gag-scraper')
    new gagScraper("trending").getRandom(function (error, data) {

        const embed = new Discord.RichEmbed()
            .setColor('#3676b3')
            .setTitle(data.title)
            .setFooter('Powered by 9GAG')
            .setImage(data.image)
            .setURL(data.url)


        msg.channel.sendEmbed(embed, {
            disableEveryone: true
        })
    });


}
