module.exports = {
    usage: 'info - Displays some basic info about Markos',
    run: (client, msg) => {
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
}

module.exports = {
    usage: 'support - Need Markos support? Get a link to the Markos support server!',
    run: (client, msg) => {
        msg.channel.sendMessage("Oh, need to talk to Melmsie? Ｃｈｅｃｋ　ｙｏ　ＤＭ＇ｓ　ｂｏｉ");
        msg.author.sendMessage("Here's an invite to the Markos/Nitrus support server: https://discord.gg/3GNMJBG");
    }
}

module.exports = {
    usage: 'joined - Displays the servers Markos has joined.',
    run: (client, msg, command) => {
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        }
    }
}

module.exports = {
    usage: 'invite - Markos will DM you a link to invite him to a server you own/have perms to.',
    run: (client, msg, command) => {
        msg.channel.sendMessage("Ok I'll DM you a link, bb");
        msg.author.sendMessage("Use this link to invite me to your server, or I'll ｍｅｍｅ　ｙｏｕ　ｔｏ　ｄｅａｔｈ :wink: \nhttps://discordapp.com/oauth2/authorize?client_id=270904126974590976&scope=bot&permissions=67628096");
    }
}

module.exports = {
    usage: 'del <number> - Deletes up to 100 messages that markos has sent.',
    run: (client, msg, command) => {
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
}
module.exports = {
    usage: 'game <game status> - Displays whatever the <game status> is, as Markos\' playing status. Bot owner only.',
    run: (client, msg, command, args) => {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        client.user.setGame(args.join(" "));
    }
}

module.exports = {
    usage: 'ping - pong! (and the actual bot ping)',
    run: (client, msg, command) => {
        msg.channel.sendMessage(':ping_pong: Pong! *${(client.ping).toFixed(0)} ms*')
    }
}

module.exports = {
    usage: 'say <message> - Displays whatever the <message> is, as Markos. Guild Owner Only.',
    run: (client, msg, command, args) => {
        if (msg.author.id === config.owner || msg.author.id === msg.guild.ownerID) {
            msg.delete();
            msg.channel.sendMessage(args.join(" "))
        }
    }
}