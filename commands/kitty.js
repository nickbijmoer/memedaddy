const rp = require('request-promise');

exports.run = function (client, msg) {
    msg.channel.sendMessage(arrays.cat[Math.floor(Math.random() * arrays.cat.length)]).then(mesg => {
        setTimeout(() => {
            rp("http://random.cat/meow").then(data => {
                msg.channel.sendFile(JSON.parse(data).file);
            });
            mesg.delete();
        }, 2500)
        if (err) {
            msg.channel.sendMessage('The kitty ran away :(')
        }
    });
};

exports.help = "Returns a random kitty picture."