exports.run = function (client, msg) {
    const Chuck = require('chucknorris-io'),
        norris = new Chuck();
    msg.channel.startTyping()
    norris.getRandomJoke().then(function (response) {
        msg.channel.stopTyping()
        msg.reply(response.value)
    }).catch(function (err) {
        msg.reply('Chuck doesn\'t allow jokes anymore')
    });
}
