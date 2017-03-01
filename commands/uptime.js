exports.run = function (client, msg) {

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
    try {
        msg.channel.sendMessage(`Markos' uptime is **__${timeCon(process.uptime())}__**\n \nToo long if you ask me!`)
    } catch (e) {
        console.log(e)
    };
}

exports.help = "**Usage: \`pls uptime\`**\nPrints the basic uptime of Markos"