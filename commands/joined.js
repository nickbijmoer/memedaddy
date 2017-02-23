exports.run = function(client, msg, args, config){
    //usage: 'joined - Displays the servers Markos has joined.',
    
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        }
    }
