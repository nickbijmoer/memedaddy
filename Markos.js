const config = require("./config.json")

const Discord = require("discord.js")
const client = new Discord.Client();

const leet = require("1337")
const Jimp = require("jimp");
const request = require("request")
const translator = require("./translate.js")

const cleverbot = require("cleverbot.io")
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key)
clever.setNick("Markos")

const stories = require("./stories.json");
const extras = require("./arrays.json");

let ayy = ["http://i.imgur.com/G1h11mQ.png", "https://giphy.com/gifs/6OEeB9rxvDyzC", "https://s-media-cache-ak0.pinimg.com/originals/06/c0/9b/06c09be319e549e0fccaa88424ea271a.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/632/652/6ca.jpg", "http://t6.rbxcdn.com/f9407db64c8f16abc58ce0ff44741534", "https://i.ytimg.com/vi/kiEqGhgWf5Y/maxresdefault.jpg"];
let coin = ["Heads", "Tails"]
let ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "It is certain", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "It is certain", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"];
let story = [stories.birth, stories.abusive, stories.confused, stories.birdbees, stories.mom, stories.no, stories.lion, stories.boy];

client.login(config.token)

client.on("message", msg => {
    console.log(msg.content);


    let command = msg.content.substring(config.prefix.length).toLowerCase().split(" ")[0]
    let args = msg.content.split(" ").slice(1)

    if (msg.content.startsWith(client.user.toString())) {
        msg.channel.startTyping()
        clever.ask(args.join(" "), function(err, response) {
            msg.channel.stopTyping(true)
            msg.reply(response);
        });
    }
    if (msg.author.bot) return false;

    if (!msg.content.startsWith(config.prefix)) return false;

    if (command === "cookie") {
        msg.channel.sendMessage("No :cookie: from me.")
    }

    if (command === "info") {
        msg.channel.sendMessage("Please wait...").then(mesg => {
            request({
                url: 'https://api.github.com/repos/Melmsie/Markos/commits',
                headers: {
                    'User-Agent': 'melmsie'
                }
            }, function(error, response, body) {
                if (!error && response.statusCode == 200) {
                    jsonBody = JSON.parse(body)
                    mesg.edit("", {
                        embed: new Discord.RichEmbed()
                            .setColor(3447003)
                            .setAuthor("Markos", client.user.displayAvatarURL)
                            .setDescription("V2.0")
                            .addField("Commands", "To see the current commands for Markos, do !help")
                            .addField("Most Recent Commit", !error ? jsonBody[0].commit.message : "There was an error communicating with GitHub")
                            .addField("Lines of Code", "301")
                            .addField("Requests", "Have a request for a command? Feel free to PM Melmsie#7331, or submit a pull request for Markos [here](https://github.com/melmsie/Markos)")
                            .setTimestamp()
                    })
                }
            });
        })
    }

    if (command === "server") {
        let embed = new Discord.RichEmbed();
        embed.setTitle(msg.guild.name)
            .setColor(3447003)
            .setAuthor("-", msg.guild.iconURL)
            .setDescription(msg.guild.owner.user.username)
            .addField("Members", msg.guild.members.size, true)
            .addField("Created", msg.guild.createdAt.toString(), true)
            .addField("Emojis", msg.guild.emojis.size > 0 ? msg.guild.emojis.map(d => d.toString()).join(" ") : "None");
        msg.channel.sendEmbed(embed)
    }

    if (command === "story") {
        msg.channel.sendMessage(story[Math.floor(Math.random() * story.length)]);
    }

    if (command === "xd") {
        msg.channel.sendFile("https://cdn.discordapp.com/attachments/248546890361077760/272125523705069568/Screen_Shot_2017-01-05_at_3.05.28_PM_copy.png")
    }

    if (command === "joke") {
        return msg.channel.sendMessage("(You haven't added jokes. Remove this line when you have.)");
        msg.channel.sendMessage(joke[Math.floor(Math.random() * joke.length)]);
    }

    if (command === "coin") {
        msg.channel.sendMessage(coin[Math.floor(Math.random() * coin.length)]);
    }

    if (command === "ayylmao") {
        msg.channel.sendFile(ayy[Math.floor(Math.random() * ayy.length)]);
    }

    if (command === "8ball") {
        if (!args[0]) return msg.channel.sendMessage("The 8ball cannot answer what is not a question.")
        msg.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
    }

    if (command === "lul") {
        msg.channel.sendFile('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
    }

    if (command === "kappa") {
        msg.channel.sendFile("http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/Kappa.png")
    }

    if (command === "translate") {
        translator(msg)
    }

    if (command === "table") {
        msg.channel.sendMessage('(╯°□°）╯︵ ┻━┻')
    }

    if (command === "copypasta") {
        msg.channel.sendMessage(extras.copy[Math.floor(Math.random() * extras.copy.length)]);
    }

    if (command === "ping") {
        msg.channel.sendMessage(":ping_pong: Pong!")
    }

    if (command === "hug") {
        msg.reply(extras.hug[Math.floor(Math.random() * extras.hug.length)]);
    }

    if (command === "1337") {
        msg.reply(leet(args.join(" ")));
    }

    if (command === "help" || command == "commands" || command === "command") {
        msg.channel.sendMessage("Sliding into your DM's...");
        msg.author.sendMessage("\n \nCommands: \n \n`!1337 [message]` - 1'Ll 3nc0d3 Y0uR Me5s@g3 1Nt0 l337sp3@K! \n \n`!triggered [tag user]` - Ｔｒｉｇｇｅｒｅｄ \n \n`!copypasta` - Returns a random ｃｏｐｙｐａｓｔａ \n \n`!game [input]` - Will set Markos' Game status [owner only] \n \n`!gif [search term(s)]` - Will search for a gif \n \n`!xd` - XD \n \n`!info` - Displays current info for Markos \n \n`!say [message]` - Speak on behalf of Markos. [owner only] \n \n`!cookie` - Markos doesn't give cookies. \n" + "\n`!table` - Only use when you're angry. \n \n`!ping` - Pong! \n \n`!lul` - LUL \n \n`!hug` - Do you get a hug from Markos? \n \n`!ayylmao` - ayyyyyy \n " + "\n`!translate [input]` - Translate anything to English! \n \n`!8ball [message]` - Markos consults his magic 8-ball for you \n \n`!coin` - Flip a coin \n" + "\n`!story` - Markos will tell you a story.");
    }

    if (command === "say") {
        if (msg.author.id !== config.owner) return false;
        msg.delete();
        msg.channel.sendMessage(args.join(" "))
    }

    if (command === "announce") {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        msg.channel.sendMessage(args.join(" "), { tts: true });
    }

    if (command === "game") {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        client.user.setGame(args.join(" "));
    }

    if (command === "gif") {
        msg.channel.sendMessage("Searching...").then(mesg => {
            request({ url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(args.join(" ")) + '&api_key=' + config.giphy + '&limit=25' }, function(err, res, body) {
                if (err) { mesg.edit("No gifs found."); return console.log(err); }
                let jsonBody = JSON.parse(body);
                if (jsonBody["data"].length === 0) {
                    mesg.edit('No gifs found')
                    return;
                }
                result = jsonBody["data"];
                random_gif = result[Math.floor(Math.random() * result.length)]["images"]["original"]["url"];
                msg.channel.sendFile(random_gif).then(() => {
                    mesg.delete()
                })
            })
        })
    }

    if (command === "triggered") {
        if (msg.mentions.users.size === 0) return msg.channel.sendMessage("You must mention a user!")
        msg.channel.sendMessage(":gear: Generating... please wait.").then(mesg => {
            Jimp.read(msg.mentions.users.first().displayAvatarURL, (err, avatar) => {
                if (err) return mesg.edit(":warning: Failed to generate image")
                Jimp.read('./triggered.jpg', (err, text) => {
                    if (err) return mesg.edit(":warning: Failed to generate image")
                    Jimp.read('./red.png', (err, tint) => {
                        if (err) return mesg.edit(":warning: Failed to generate image")
                        tint.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
                        tint.opacity(0.2)
                        avatar.composite(tint, 0, 0)
                        text.scaleToFit(avatar.bitmap.width, avatar.bitmap.height)
                        avatar.composite(text, 0, avatar.bitmap.height - text.bitmap.height);
                        avatar.getBuffer(Jimp.MIME_PNG, (err, buffer) => {
                            mesg.delete()
                            msg.channel.sendFile(buffer)
                        })
                    })
                })
            })
        })
    }


})

client.on("ready", () => {
    console.log("Markos v2.0 loaded successfully.");
    console.log("Hello, Austin.");
    client.user.setGame('!help || v2.0');
    clever.create(function(err, session) {
        if (err) return console.log("Error creating cleverbot session")
        console.log("Cleverbot session created")
    });
})