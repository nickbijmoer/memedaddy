exports.run = function (client, msg) {
    var oneLinerJoke = require('one-liner-joke');
    var getRandomJoke = oneLinerJoke.getRandomJoke();
    msg.reply(getRandomJoke.body)
}
