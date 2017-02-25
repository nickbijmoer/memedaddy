const rp = require('request-promise');
const arrays = require('./../arrays.json');
exports.run = function (client, msg) {
    msg.channel.sendMessage(arrays.pup[Math.floor(Math.random() * arrays.pup.length)]).then(mesg => {
        setTimeout(() => {
            rp("http://random.dog/woof").then(data => {
                msg.channel.sendFile(`http://random.dog/${data}`);
            });
            mesg.delete();
        }, 2500)
        if (err) {
            msg.channel.sendMessage('The pupper ran away :(')
        }
    });
};

exports.help = "Returns a random dog picture."