exports.run = function(client, msg, args, settings, Discord){
    //usage: 'info - Displays some basic info about Markos',
    
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
            .setDescription('yo')
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
