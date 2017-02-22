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
            .setTitle('Markos/Nitrus Support Server')
            .setAuthor('MemeDaddy Markos')
            .setColor("#3676b3")
            .setDescription(version)
            .setFooter('Need to see my commands? Do pls help')
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
        msg.author.sendMessage("Here's an invite to the Markos/Nitrus support server: https://discord.gg/3GNMJBG");
    }

    if (command === "servers") {
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        }
    }

    if (command === "invite") {
        msg.channel.sendMessage("Ok I'll DM you a link, bb");
        msg.author.sendMessage("Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink: \nhttps://discordapp.com/oauth2/authorize?client_id=270904126974590976&scope=bot&permissions=67628096");
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

    if (command === "help" || command == "commands" || command === "command") {
        msg.channel.sendMessage("Sliding into your DM's...");
        msg.author.sendMessage("\n \n**Commands:** \n \n**1337 [message]** - *1'Ll 3nc0d3 Y0uR Me5s@g3 1Nt0 l337sp3@K!*\n \n**triggered [tag user]** - Ｔｒｉｇｇｅｒｅｄ\n \n**copypasta** - *Returns a random ｃｏｐｙｐａｓｔａ*\n \n**game [input]** - *Will set Markos' Game status [bot owner only]*\n \n**gif [search term(s)]** - *Will search for a gif*\n \n**xd** - *XD*\n \n**info** - *Displays current info for Markos*\n \n**say [message]** - *Speak on behalf of Markos. [guild owner only]*\n" +
            "\n**ping** - *Pong!*\n \n**lul** - *LUL*\n \n**ayylmao** - *ayyyyyy*\n \n**server** - *Oh, need to talk to Melmsie? Do this one.*\n \n**kappa** - *Kappa. Duh.*\n \n**vaporwave** - ｖａｐｏｒｗａｖｅ ｙｏｕｒ ｔｅｘｔ ｕｐ\n \n**superscript** - ᵐᵃᵏᵉ ʸᵒᵘʳ ᵗᵉˣᵗ ᵗᵉᵉⁿʸ");
    }

    if (command === "game") {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        client.user.setGame(args.join(" "));
    }

    if (command === "ping") {
        msg.channel.sendMessage(':ping_pong: Pong! *${(client.ping).toFixed(0)} ms*')
    }

    if (command === "say") {
        if (msg.author.id !== config.owner) return false;
        msg.delete();
        msg.channel.sendMessage(args.join(" "))
    }
