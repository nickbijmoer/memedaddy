const moment = require('moment')
require('moment-duration-format')

exports.run = function (client, msg) {
  const uptime = moment.duration(process.uptime(), 'seconds').format('dd:hh:mm:ss')

  msg.channel.sendMessage(`MemeDaddy's uptime is **__${uptime}__**\n\nToo long if you ask me!`)
}

exports.help = '**Usage: `pls uptime`**\nPrints the basic uptime of Markos'
