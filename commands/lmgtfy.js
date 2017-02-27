exports.run = function (client, msg, args) {
    msg.channel.send(`<http://lmgtfy.com/?q=${msg.content.split(' ').slice(2).join('+')}>`)
}

exports.help = "**Usage: \`pls lgmtfy <search query>\`**\nSick of someone asking dumb or easily googled questions? Use this to educate them!"