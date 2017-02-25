const rp = require('request-promise');
const arrays = require('./../arrays.json');
exports.run = function (client, msg) {
    try {
        msg.channel.sendMessage(arrays.cat[Math.floor(Math.random() * arrays.cat.length)]).then(mesg => {
            setTimeout(() => {
                rp("http://random.cat/meow").then(data => {
                    msg.channel.sendFile(JSON.parse(data).file);
                });
                mesg.delete();
            }, 2500)
        });
    } catch (e) {
        msg.reply('Oh no, the kitty ran away!')
        console.log(e)
    };

}

exports.help = "**Usage: \`pls kitty\`**\nAll da kitteh pics"