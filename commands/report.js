exports.run = function (client, msg, args, settings, Discord) {
    function timeCon(time) {
        time = time * 1000
        let days = 0,
            hours = 0,
            minutes = 0,
            seconds = 0
        days = Math.floor(time / 86400000)
        time -= days * 86400000
        hours = Math.floor(time / 3600000)
        time -= hours * 3600000
        minutes = Math.floor(time / 60000)
        time -= minutes * 60000
        seconds = Math.floor(time / 1000)
        time -= seconds * 1000
        days = days > 9 ? days : "0" + days
        hours = hours > 9 ? hours : "0" + hours
        minutes = minutes > 9 ? minutes : "0" + minutes
        seconds = seconds > 9 ? seconds : "0" + seconds
        return (parseInt(days) > 0 ? days + ":" : "") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + ":") + minutes + ":" + seconds
    }

    let embed = new Discord.RichEmbed()
        .setColor("#357cee")
        .setTitle(`${client.user.username} ${settings.version}`)
        .addField("Uptime", `${timeCon(process.uptime())}`, true)
        .addField("RAM Usage", `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
        .addField("Websocket Ping", `${(client.ping).toFixed(0)} ms`, true)
        .addField("Node", `${process.version}`, true)
        .addField("Library", `[Discord.js](https://discord.js.org) v${Discord.version}`, true)
        .addField("System Info", `${process.platform} (${process.arch})`, true)
        .addField("Joined Guilds", client.guilds.size, true)
        .addField('Text Channels', client.channels.size, true)
        .addField('Users', client.users.size, true)
        .addField("Newest Guild", client.guilds.last().name, true)
        .addField('Bot Guilds', client.guilds.filter(x => x.members.filter(c => c.user.bot).size > 10 && (x.members.filter(c => c.user.bot).size / x.members.size) > 0.70).map(x=>x.name).length, true)
       
        

msg.channel.sendEmbed(embed)
}
