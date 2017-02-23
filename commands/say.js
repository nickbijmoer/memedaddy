
module.exports = {
    usage: 'say <message> - Displays whatever the <message> is, as Markos. Guild Owner Only.',
    run: (client, msg, command, args) => {
        if (msg.author.id === config.owner || msg.author.id === msg.guild.ownerID) {
            msg.delete();
            msg.channel.sendMessage(args.join(" "))
        }
    }
}
