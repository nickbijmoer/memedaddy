exports.run = function(client, msg, args, config){
    //usage: 'joined - Displays the servers Markos has joined.',
    
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        } else {
            msg.reply('You don\'t have permission to use this command, noob.')
        }
    }
exports.help = "**Usage: \`pls servers\`**\n[Owner Only] Display the servers Markos is in.**"