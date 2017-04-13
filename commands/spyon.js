exports.run = function (client, msg, args, config) {
  if (msg.author.id === config.owner) {
    try {
    client.guilds.find("name", args.join(' ')).defaultChannel.createInvite({ maxAge: 30  }).then(inv => msg.channel.sendMessage(inv.url ? inv.url : "discord.gg/" + inv.code))
    } catch(e){
        console.log(e)
        msg.reply(' they don\'t allow me to generate invites :(')
    }
  } else{
      msg.reply(" only melmsie gets to spy on servers, sorry")
  }
}
