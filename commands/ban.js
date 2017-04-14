exports.run = function (client, msg, args) {
    let reason = args.slice(1).join(' ')
    let user = msg.mentions.users.first()
    let member = msg.guild.member(user)
    if (!msg.guild.member(msg.author).hasPermission('BAN_MEMBERS')) return msg.reply('You must be a moderator to ban people!').catch(console.error)
    if (msg.mentions.users.size < 1) return msg.reply('Please mention someone in the server to ban!').catch(console.error)
    if (reason.length < 1) return msg.reply('Please supply a reason for the ban!').catch(console.error)

    if (!msg.guild.member(client.user).hasPermission('BAN_MEMBERS')) return msg.reply('I do not have the correct permissions!').catch(console.error)

    if (msg.guild.member(member) && member.kickable) {
        user.sendMessage(`**__You were banned from ${msg.guild.name}.__**\n\n**Banned by:** ` + msg.author.username + '\n\n**Reason:** *' + reason + '*').then(() => {
            msg.guild.member(user).ban()
        })
    } else if (!member.kickable) {
        msg.reply('This user is not hurt by the ban hammer!')
    } else {
        msg.reply("This user doesn't exist in the server!")
    }

}
