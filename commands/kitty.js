const rp = require('request-promise');
exports.run = function (client, msg) {
    rp("http://random.cat/meow").then(data => {
        msg.channel.sendFile(JSON.parse(data).file);
    });
};

exports.help = "Returns a random kitty picture."