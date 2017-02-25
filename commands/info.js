exports.run = function(client, msg, args, config, Discord){
    //usage: 'info - Displays some basic info about Markos',
    
        const embed = new Discord.RichEmbed()
            .setTitle('Melmsie\'s Server')
            .setAuthor('About Markos and Melmsie')
            .setColor("#3676b3")
            .setDescription('Dat meme bot doe')
            .setFooter('Need to see my commands? Do pls help')
            .setURL('https://discord.gg/B4HZAtA')

            .addField('About Melmsie', `Melmsie is a freelance web developer and a gamer at heart. You can catch him playing Overwatch most of the time.`)
            .addField('About Markos', `Markos is a German name, because Melmsie speaks a fair amount of German, and just loves that name. Deal with it.`)
            .addField('Upcoming Features', `Voice memes, cleverbot, and more shitposting`)
            .addField('Find a bug?', 'Contact Melmsie via pls bug <message>')



        msg.channel.sendEmbed(
            embed, {
                disableEveryone: true
            }
        );
    }

exports.help = "Returns information about Markos and his Creator."