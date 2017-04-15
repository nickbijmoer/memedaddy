const fs = require("fs")

exports.run = function(client, msg, args, config, Discord, prefixdb) {
if (msg.content.toLowerCase().substring(prefixdb[msg.guild.id].length + 8, msg.content.length) === "") return msg.channel.sendEmbed(new Discord.RichEmbed()
            .setColor('#ffffff')
            .setDescription(`The current prefix for this guild is \`${prefixdb[msg.guild.id]}\`.`))

        if (msg.guild.member(client.user).hasPermission('MANAGE_GUILD') || msg.author.id === config.owner) {
            if (msg.content.toLowerCase().substring(prefixdb[msg.guild.id].length + 8, msg.content.length).length > 16) return msg.channel.sendMessage("Please keep your prefix below 16 characters.")
            prefixdb[msg.guild.id] = msg.content.toLowerCase().substring(prefixdb[msg.guild.id].length + 8, msg.content.length)
            fs.writeFile("./prefixdb.json", JSON.stringify(prefixdb, "", "\t"), (err) => {
                if (err) return msg.channel.sendMessage("Your prefix couldn't be changed.\n" + err.message);
                msg.channel.send(`Prefix successfully changed to \`${prefixdb[msg.guild.id]}\` for this guild.`)
            })
        } else {
            return msg.channel.sendMessage("You do not have the required permissions for this command. You must have the manage server permission.")
        };
}
