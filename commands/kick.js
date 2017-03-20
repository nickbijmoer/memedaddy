exports.run = function (client, msg, args) {
    let reason = args.slice(1).join(' ');
    let user = msg.mentions.users.first();
    let member = msg.guild.member(user);
    if (!msg.guild.member(msg.author).hasPermission('KICK_MEMBERS')) return msg.reply('You must be a moderator to kick people!').catch(console.error);
    if (msg.mentions.users.size < 1) return msg.reply('Please mention someone in the server to kick!').catch(console.error);
    if (reason.length < 1) return msg.reply('Please supply a reason for the kick!').catch(console.error);
    if (!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) return msg.reply('I do not have the correct permissions!').catch(console.error);
    if (msg.guild.member(member) && member.kickable) {
        user.sendMessage(`**__You were kicked from ${msg.guild.name}.__**\n\n**Kicked by:** ` + msg.author.username + '\n\n**Reason:** *' + reason + '*').then(() => {
            msg.guild.member(user).kick()
        })
    } else if (!member.kickable) {
        msg.reply('This user is not kickable!');
    } else {
        msg.reply("This user doesn't exist in the server!");
    };
}
