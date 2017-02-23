module.exports = {
    usage: 'game <game status> - Displays whatever the <game status> is, as Markos\' playing status. Bot owner only.',
    run: (client, msg, command, args) => {
        if (msg.author.id !== config.owner) return false;
        msg.delete()
        client.user.setGame(args.join(" "));
    }
}