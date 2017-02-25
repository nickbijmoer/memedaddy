let moment = require("moment");
require("moment-duration-format");
exports.run = function (client, msg, args, settings, Discord) {
    var uptime = moment.duration(process.uptime(), "seconds").format("dd:hh:mm:ss");

    let embed = new Discord.RichEmbed();
    embed
        .setColor("#7d5bbe")
        .setTitle(`Markos || ${settings.version}`)
        .addField("Uptime", uptime, true)
        .addField("RAM Usage", `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
        .addField("Websocket Ping", `${(client.ping).toFixed(0)} ms`, true)
        .addField("Node", `${process.version}`, true)
        .addField("Library", `[Discord.js](https://discord.js.org) v${Discord.version}`, true)
        .addField("System Info", `${process.platform} (${process.arch})`, true)
        .addField("Joined Guilds", client.guilds.size, true)
        .addField("Owner Height", '6\'2"', true)
        .addField("Newest Guild", client.guilds.last().name, true);
    msg.channel.sendMessage("", {
        embed: embed
    });
};

exports.help = "**Usage: \`pls stats\`**\nReturns some useful stats about Markos."