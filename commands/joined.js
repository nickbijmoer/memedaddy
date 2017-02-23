module.exports = {
    usage: 'joined - Displays the servers Markos has joined.',
    run: (client, msg, command) => {
        if (msg.author.id === config.owner) {
            msg.channel.sendMessage(client.guilds.array())
        }
    }
}