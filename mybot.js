var Discord = require("discord.js");
var bot = new Discord.Client();
const config = require("./config.json");
var l33t = require('1337')
var Jimp = require("jimp");
var cleverbot = require("cleverbot.io");
clever = new cleverbot(config.clever, config.key);
clever.setNick("Markos");
var giphy = require('giphy-api')("dc6zaTOxFJmzC");
const stories = require("./stories.json");
const arrays = require("./arrays.json");
var prefix = (config.prefix);
var request = require("request");
const translate_message = require("./translate.js");
var ayy = ["http://i.imgur.com/G1h11mQ.png", "https://giphy.com/gifs/6OEeB9rxvDyzC", "https://s-media-cache-ak0.pinimg.com/originals/06/c0/9b/06c09be319e549e0fccaa88424ea271a.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/632/652/6ca.jpg", "http://t6.rbxcdn.com/f9407db64c8f16abc58ce0ff44741534", "https://i.ytimg.com/vi/kiEqGhgWf5Y/maxresdefault.jpg"];
var coin = ["Heads", "Tails"];
var ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "It is certain", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "It is certain", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
var story = [stories.birth, stories.abusive, stories.confused, stories.birdbees, stories.mom, stories.no, stories.lion, stories.boy];
var copy = arrays.copy;




bot.on("message", message => {
    console.log(message.content);
    let args = message.content.split(" ").slice(1);
    //anti-bot line
    
    if (message.content.startsWith("<@270904126974590976>")) {
        clever.ask("", function(err, response) {
            message.reply(response);
        });
    }
if (message.author.bot) return;
    if (message.content.startsWith("!cookie")) {
        message.channel.sendMessage("No cookies from me.");
    }
    request({
        url: 'https://api.github.com/repos/Melmsie/Markos/commits',
        headers: {
            'User-Agent': 'melmsie'
        }
    }, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            jsonBody = JSON.parse(body)
            if (message.content.startsWith("!info")) {
                message.channel.sendMessage("", {
                    embed: {
                        color: 3447003,
                        author: {
                            name: `Markos`,
                            icon_url: bot.user.avatarURL
                        },
                        title: '',
                        description: 'V1.3',
                        fields: [{
                            name: 'Commands',
                            value: 'To see the current commands for Markos, do !help'
                        }, {
                            name: 'Most Recent Commit',
                            value: jsonBody[0].commit.message
                        }, {
                            name: 'Lines of Code',
                            value: '301'
                        }, {
                            name: 'Requests',
                            value: 'Have a request for a command? Feel free to PM Melmsie#7331, or submit a pull request for Markos [here](https://github.com/melmsie/Markos).'
                        }],
                        timestamp: new Date(),
                    }
                });
            }
        }
    })
    if (message.content.startsWith("!story")) {
        message.channel.sendMessage(story[Math.floor(Math.random() * story.length)]);
    }

    if (message.content.startsWith("!xd")) {
        message.channel.sendMessage("https://cdn.discordapp.com/attachments/248546890361077760/272125523705069568/Screen_Shot_2017-01-05_at_3.05.28_PM_copy.png")
    }

    if (message.content.startsWith("!joke")) {
        message.channel.sendMessage(joke[Math.floor(Math.random() * joke.length)]);
    }
    if (message.content.startsWith("!coin")) {
        message.channel.sendMessage(coin[Math.floor(Math.random() * coin.length)]);
    }
    if (message.content.startsWith("!ayylmao")) {
        message.channel.sendMessage(ayy[Math.floor(Math.random() * ayy.length)]);
    }
    if (message.content.startsWith("!8ball")) {
        message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
    }
    if (message.content.startsWith("!lul")) {
        message.channel.sendMessage('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
    }
    if (message.content.startsWith("!table")) {
        message.channel.sendMessage('(╯°□°）╯︵ ┻━┻')
    }
    if (message.content.startsWith("!copypasta")) {
        message.channel.sendMessage(copy[Math.floor(Math.random() * copy.length)]);
    }
    if (message.content.startsWith("!ping")) {
        message.channel.sendMessage("pong");
    }
    if (message.content.startsWith("!triggered")) {
        message.channel.sendMessage("pong");
    }
    if (message.content.startsWith("!hug")) {
        message.reply(arrays.hug[Math.floor(Math.random() * arrays.hug.length)]);
    }
    if (message.content.startsWith("!1337")) {
        message.reply(l33t((args.join(" "))));
    }
    if (message.content.includes("!help")) {
        message.channel.sendMessage("Sliding into your DM's...");
        message.author.sendMessage("\n \nCommands: \n \n`!1337 [message]` - 1'Ll 3nc0d3 Y0uR Me5s@g3 1Nt0 l337sp3@K! \n \n`!copypasta` - Returns a random copypasta \n \n`!game [input]` - Will set Markos' Game status [owner only] \n \n`!gif [search term(s)]` - Will search for a gif \n \n`!xd` - XD \n \n`!info` - Displays current info for Markos \n \n`!say [message]` - Speak on behalf of Markos. [Creators Only] \n \n`!cookie` - Markos doesn't give cookies. \n" + "\n`!table` - Only use when you're angry. \n \n`!ping` - Pong! \n \n`!lul` - LUL \n \n`!hug` - Do you get a hug from Markos? \n \n`!ayylmao` - ayyyyyy \n " + "\n`!translate [input]` - Translate anything to English! \n \n`!8ball [message]` - Markos consults his magic 8-ball for you \n \n`!coin` - Flip a coin \n" + "\n`!story` - Markos will tell you a story.");
    }

    if (message.content.startsWith("/say")) {
        if (message.author.id !== "172571295077105664") return;
        message.channel.sendMessage(args.join(" "));
        message.delete()
    }

    if (message.content.startsWith("/announce")) {
        if (message.author.id !== "172571295077105664") return;
        message.channel.sendMessage(args.join(" "), { tts: true });
        message.delete()
    }
    //Jimp.read('message.author.avatarURL', function(err, image) {
     //   if (message.content.startsWith("!test")) {
      //      message.channel.sendMessage(image.composite('http://vignette4.wikia.nocookie.net/animal-jam-clans-1/images/3/32/TRIGGERED.png/revision/latest?cb=20160323234659', 0, 0));


      //  }
    //})


    if (message.content.startsWith("!game")) {
        if (message.author.id !== "172571295077105664") return;
        bot.user.setGame(args.join(" "));
        message.delete()
    }
    if (message.content.startsWith("!gif")) {

        request({ url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(args.join(" ")) + '&api_key=dc6zaTOxFJmzC&limit=25' }, function(err, res, body) {
            let jsonBody = JSON.parse(body);
            result = jsonBody["data"];
            random_gif = result[Math.floor(Math.random() * result.length)]["images"]["original"]["url"];
            message.channel.sendFile(random_gif);
        })
    }

    if (message.content.startsWith('!translate')) translate_message(message);

});
bot.on("ready", () => {
    console.log("Markos v1.3 loaded successfully.");
    console.log("Hello, Austin.");
    bot.user.setGame('Beep Boop');
    clever.create(function(err, session) {});
});
bot.login(config.token);