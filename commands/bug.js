exports.run = function(client, msg, args, config, Discord){
    msg.react("👌")
   client.users.get('172571295077105664').sendMessage("**" + msg.author.username + '#' + msg.author.discriminator + " (" + msg.author.id + ")" + ":**\n" + msg.content.split(" ").slice(1).join(" "));
    msg.reply('Thanks for bugging Melmsie!');
   
}