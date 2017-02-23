module.exports = {
    usage: 'ping - pong! (and the actual bot ping)',
    run: (client, msg, command) => {
        msg.channel.sendMessage(':ping_pong: Pong! *${(client.ping).toFixed(0)} ms*')
    }
}