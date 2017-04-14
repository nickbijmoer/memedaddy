

exports.run = function (client, msg, args, config, Discord) {
    try {
    msg.channel.sendFile(right[Math.floor(Math.random() * right.length)]);
    } catch(e){
        msg.reply('I can\'t, there was an error :(')
    }
}
