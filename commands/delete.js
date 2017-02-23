module.exports = {
    usage: 'delete <number> - Deletes up to 100 messages that markos has sent.',
    run: (client, msg, command) => {
        if (msg.author.id === config.owner || msg.author.id === msg.guild.ownerID) {
            msg.delete()
            let num = parseInt(args[0]) + 1
            msg.channel.fetchMessages({
                limit: 100
            }).then(msgs => {
                let mga = msgs.array()
                mga = mga.filter(m => m.author.id === client.user.id)
                mga.length = num
                mga.map(m => m.delete().catch())
            })
        } else {
            msg.channel.sendMessage("You don't have permission to use this command! :fire:");
        }
    }
}