const config = require("./config.json")

const Discord = require("discord.js")
const client = new Discord.Client();


const leet = require("1337")
const Jimp = require("jimp");
const request = require("request")

const cleverbot = require("cleverbot.io")
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key)
clever.setNick("Markos")

const stories = require("./stories.json");
const extras = require("./arrays.json");

let version = "v2.4"
let ayy = ["http://i.imgur.com/G1h11mQ.png", "https://giphy.com/gifs/6OEeB9rxvDyzC", "https://s-media-cache-ak0.pinimg.com/originals/06/c0/9b/06c09be319e549e0fccaa88424ea271a.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/632/652/6ca.jpg", "http://t6.rbxcdn.com/f9407db64c8f16abc58ce0ff44741534", "https://i.ytimg.com/vi/kiEqGhgWf5Y/maxresdefault.jpg"];


client.login(config.token)

client.on("guildCreate", guild => {
        guild.owner.user.dmChannel.sendMessage(" tesst ")
    })

client.on("message", msg => {
    if (!msg.content.startsWith(config.prefix)) return false;
    if (msg.author.bot) return false;
    console.log(msg.content);

    let command = msg.content.substring(config.prefix.length).toLowerCase().split(" ")[0]
    let args = msg.content.split(" ").slice(2)


    if (msg.content.startsWith(client.user.toString())) {
        msg.channel.startTyping()
        clever.ask(args.join(" "), function (err, response) {
            msg.channel.stopTyping(true)
            msg.reply(response);
        });
    }
    if (msg.author.bot) return false;

    if (!msg.content.startsWith(config.prefix)) return false;

    if (command === "info") {

        function timeCon(time) {
            time = time * 1000
            let days = 0,
                hours = 0,
                minutes = 0,
                seconds = 0
            days = Math.floor(time / 86400000);
            time -= days * 86400000
            hours = Math.floor(time / 3600000);
            time -= hours * 3600000
            minutes = Math.floor(time / 60000);
            time -= minutes * 60000
            seconds = Math.floor(time / 1000);
            time -= seconds * 1000
            days = days > 9 ? days : "0" + days
            hours = hours > 9 ? hours : "0" + hours
            minutes = minutes > 9 ? minutes : "0" + minutes
            seconds = seconds > 9 ? seconds : "0" + seconds
            return (parseInt(days) > 0 ? days + ":" : "") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + ":") + minutes + ":" + seconds
        }


        const embed = new Discord.RichEmbed()
            .setTitle('Markos/Nitro Support Server')
            .setAuthor('MemeDaddy Markos')
            .setColor("#3676b3")
            .setDescription(version)
            .setFooter('Need to see my commands? Do !help')
            .setURL('https://discord.gg/3GNMJBG')

            .addField('Memory Usage', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
            .addField('Ping', `${(client.ping).toFixed(0)} ms`, true)
            .addField('Uptime', `${timeCon(process.uptime())}`, true)
            .addField('Guilds', client.guilds.size, true)
            


        msg.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
    }

    if (command === "server") {
        msg.channel.sendMessage("Oh, need to talk to Melmsie? Ｃｈｅｃｋ　ｙｏ　ＤＭ＇ｓ　ｂｏｉ");
        msg.author.sendMessage("Here's an invite to the Markos support server: https://discord.gg/3GNMJBG");
    }

    if (command === "vaporwave") {
        let text = args.join(" ").replace(/a/gi, "ａ").replace(/b/gi, "ｂ").replace(/c/gi, "ｃ").replace(/d/gi, "ｄ").replace(/e/gi, "ｅ").replace(/f/gi, "ｆ").replace(/g/gi, "ｇ").replace(/h/gi, "ｈ").replace(/i/gi, "ｉ").replace(/j/gi, "ｊ").replace(/k/gi, "ｋ").replace(/l/gi, "ｌ").replace(/m/gi, "ｍ").replace(/n/gi, "ｎ").replace(/o/gi, "ｏ").replace(/p/gi, "ｐ").replace(/q/gi, "ｑ").replace(/r/gi, "ｒ").replace(/s/gi, "ｓ").replace(/t/gi, "ｔ").replace(/u/gi, "ｕ").replace(/v/gi, "ｖ").replace(/w/gi, "ｗ").replace(/x/gi, "ｘ").replace(/y/gi, "ｙ").replace(/z/gi, "ｚ")
        msg.reply("**" + text + "**")
    }
    if (command === "superscript") {
        let text = args.join(" ").replace(/a/gi, "ᵃ").replace(/b/gi, "ᵇ").replace(/c/gi, "ᶜ").replace(/d/gi, "ᵈ").replace(/e/gi, "ᵉ").replace(/f/gi, "ᶠ").replace(/g/gi, "ᵍ").replace(/h/gi, "ʰ").replace(/i/gi, "ᶦ").replace(/j/gi, "ʲ").replace(/k/gi, "ᵏ").replace(/l/gi, "ˡ").replace(/m/gi, "ᵐ").replace(/n/gi, "ⁿ").replace(/o/gi, "ᵒ").replace(/p/gi, "ᵖ").replace(/q/gi, "ᑫ").replace(/r/gi, "ʳ").replace(/s/gi, "ˢ").replace(/t/gi, "ᵗ").replace(/u/gi, "ᵘ").replace(/v/gi, "ᵛ").replace(/w/gi, "ʷ").replace(/x/gi, "ˣ").replace(/y/gi, "ʸ").replace(/z/gi, "ᶻ")
        msg.reply("**" + text + "**")
    }

    if (command === "servers") {
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        }
    }

    if (command === "xd") {
        msg.channel.sendFile("https://cdn.discordapp.com/attachments/248546890361077760/272125523705069568/Screen_Shot_2017-01-05_at_3.05.28_PM_copy.png")
    }

    if (command === "ayylmao") {
        msg.channel.sendFile(ayy[Math.floor(Math.random() * ayy.length)]);
    }

    if (command === "invite") {
        msg.channel.sendMessage("Ok I'll DM you a link, bb");
        msg.author.sendMessage("Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink: \nhttps://discordapp.com/oauth2/authorize?client_id=270904126974590976&scope=bot&permissions=67628096");
    }

    if (command === "lul") {
        msg.channel.sendFile('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
    }

    if (command === "kappa") {
        msg.channel.sendFile("http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/Kappa.png")
    }

    if (command === "copypasta") {
        msg.channel.sendMessage(extras.copy[Math.floor(Math.random() * extras.copy.length)]);
    }

    if (command === "del") {
        if (msg.author.id === config.owner || msg.author.id === msg.guild.ownerID) {
            msg.delete()
            let num = parseInt(args[0]) + 1
            msg.channel.fetchMessages({
                limit: 100
            }).then(msgs => {
                let mga = msgs.array()
                mga = mga.filter(m => m.author.id === client.user.id)
                mga.length = num
                mga.map(m => m.delete().catch())
            })
        } else {
            msg.channel.sendMessage("You don't have permission to use this command! :fire:");
        }

    }

    if (command === "ping") {
        msg.channel.sendMessage(":ping_pong: Pong!")
    }

    if (command === "1337") {
        msg.reply(leet(args.join(" ")));
    }

    if (command === "help" || command == "commands" || command === "command") {
        msg.channel.sendMessage("Sliding into your DM's...");
        msg.author.sendMessage("\n \n**Commands:** \n \n**1337 [message]** - *1'Ll 3nc0d3 Y0uR Me5s@g3 1Nt0 l337sp3@K!*\n \n**triggered [tag user]** - Ｔｒｉｇｇｅｒｅｄ\n \n**copypasta** - *Returns a random ｃｏｐｙｐａｓｔａ*\n \n**game [input]** - *Will set Markos' Game status [bot owner only]*\n \n**gif [search term(s)]** - *Will search for a gif*\n \n**xd** - *XD*\n \n**info** - *Displays current info for Markos*\n \n**say [message]** - *Speak on behalf of Markos. [guild owner only]*\n" +
            "\n**ping** - *Pong!*\n \n**lul** - *LUL*\n \n**ayylmao** - *ayyyyyy*\n \n**server** - *Oh, need to talk to Melmsie? Do this one.*\n \n**kappa** - *Kappa. Duh.*\n \n**vaporwave** - ｖａｐｏｒｗａｖｅ ｙｏｕｒ ｔｅｘｔ ｕｐ\n \n**superscript** - ᵐᵃᵏᵉ ʸᵒᵘʳ ᵗᵉˣᵗ ᵗᵉᵉⁿʸ");
    }

    if (command === "say") {
        if (msg.author.id !== config.owner) return false;
        msg.delete();
        msg.channel.sendMessage(args.join(" "))
    }

    if (command === "game") {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        client.user.setGame(args.join(" "));
    }

    if (command === "gif") {
        msg.channel.sendMessage("Ｓｅａｒｃｈｉｎｇ　ｆｏｒ　ｙｏｕｒ　ｇｉｆ．．．").then(mesg => {
            request({
                url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(args.join(" ")) + '&api_key=' + config.giphy + '&limit=25'
            }, function (err, res, body) {
                if (err) {
                    mesg.edit("No gifs found.");
                    return console.log(err);
                }
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
    console.log("Markos " + version + " loaded successfully.");
    client.user.setGame('pls help || ' + version);
    clever.create(function (err, session) {
        if (err) return console.log("Error creating cleverbot session")
        console.log("Cleverbot session created")
    });
    console.log("Welcome, Austin.");
})