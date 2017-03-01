const moment = require('moment')
require('moment-duration-format')

exports.run = function (client, msg, args, config, Discord) {
  const uptime = moment.duration(process.uptime(), 'seconds').format('dd:hh:mm:ss')

  const embed = new Discord.RichEmbed()
    .setColor('#7d5bbe')
    .setTitle(`Markos || ${config.version}`)
    .addField('__Uptime__', uptime, true)
    .addField('__RAM Usage__', `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
    .addField('__Websocket Ping__', `${(client.ping).toFixed(0)} ms`, true)
    .addField('__Node__', `${process.version}`, true)
    .addField('__Library__', `[Discord.js](https://discord.js.org) v${Discord.version}`, true)
    .addField('__System Info__', `${process.platform} (${process.arch})`, true)
    .addField('__Joined Guilds__', client.guilds.size, true)
    .addField('__Newest Guild__', client.guilds.last().name, true)
    .addField('__Owner Height__', '6\'2"', true)

  msg.channel.sendEmbed(embed, { disableEveryone: true })
}

exports.help = '**Usage: `pls stats`**\nReturns some useful stats about Markos.'
