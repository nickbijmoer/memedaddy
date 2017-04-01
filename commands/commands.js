   exports.run = function (client, msg, args, config, Discord) {
       const memes = new Discord.RichEmbed()
           .setColor('#ff0000')
           .setAuthor(`Memey Commands`)
           .setDescription(
               '**9gag** : get a random trending image from 9GAG\n' +
               '**asktrump** : trump will give his opinion on your question\n' +
               '**glorify** : replaces Chuck Norris\'s name with the mentioned user in a Norris joke\n' +
               '**insultme** : insults you in old-timey terms\n' +
               '**joke** : sends a random one-liner (can be nsfw)\n' +
               '**kitty** : meow, a random kitten!\n' +
               '**knock** : who\'s there?\n' +
               '**lmgtfy** : when someone is too dumb to google something, use this\n' +
               '**mama** : yo mama hates this command\n' +
               '**meirl** : returns a random post from /r/me_irl\n' +
               '**memegen** : __coming soon__\n' +
               '**norris** : returns a random chuck norris joke\n' +
               '**pun** : gotta love puns, right?\n' +
               '**pupper** : bark bark!\n' +
               '**rip** : I can\'t explain this one.\n' +
               '**shitpost** : warning: shitpost\n' +
               '**urban** : search for something on urban dictionary\n' +
               '**xkcd** : fetches an XKCD comic. Leave no query for a random comic'
           )
           .setFooter('Page 1')

       const tags = new Discord.RichEmbed()
           .setColor('#ffa500')
           .setAuthor(`Tags & Text Manipulation`)
           .setDescription(
               '**feelsbadman** : pepe\n' +
               '**flip** : flips your message upside down\n' +
               '**leet** : translates your message to 1337 speak\n' +
               '**lenny** : ( ͡° ͜ʖ ͡°)\n' +
               '**lul** : lul\n' +
               '**superscript** : teeny tiny!\n' +
               '**vaporwave** : ｈｅｌｌｏ\n' +
               '**zalgo** : z̻͙͎̘̻̹̰͟a̭͎̥l̬̗͟g̛̠͎̹̗̠̮ͅo̯̭̣͎\n'
           )
           .setFooter('Page 2')

       const mods = new Discord.RichEmbed()
           .setColor('#ffff00')
           .setAuthor(`Moderation Tools`)
           .setDescription(
               '**ban** : ban someone\n' +
               '**kick** : kick someone\n' +
               '**purge** : delete up to 99 messages at a time'
           )
           .setFooter('Page 3')

       const images = new Discord.RichEmbed()
           .setColor('#00ff00')
           .setAuthor(`Image Manipulation`)
           .setDescription(
               '**trigger** : trigger someone\n' +
               '**magic** : __coming soon__\n' +
               '**swirl** : __coming soon__'
           )
           .setFooter('Page 4')

       const voice = new Discord.RichEmbed()
           .setColor('#0000ff')
           .setAuthor(`Voice Commands`)
           .setDescription(
               '**soundclowns** : __coming soon__\n' +
               '**sound memes** : __coming soon__\n' +
               '**airhorn** : __coming soon__\n'
           )
           .setFooter('Page 5')

           const info = new Discord.RichEmbed()
           .setColor('#4B0082')
           .setAuthor(`Information`)
           .setDescription(
               '**bug** : `pls bug melmsie "bug report"`\n' +
               '**help** : get help with the bot\n' +
               '**info** : information about the bot\n' +
               '**ping** : pong\n' +
               '**serverinfo** : see basic server information\n' +
               '**stats** : basic stats about the bot\n' +
               '**support** : help support the creator\n' +
               '**uptime** : see the bot\'s current uptime\n' +
               '**userinfo** : see your information\n'
           )
           .setFooter('Page 6')

       const melmsie = new Discord.RichEmbed()
           .setColor('#800080')
           .setAuthor(`Melmsie Only`)
           .setDescription(
               '**eval** : evaluate some javascript\n' +
               '**reboot** : restart the bot\n' +
               '**servers** : print all the servers in a hastebin\n'
           )
           .setFooter('Page 7')







       msg.channel.sendEmbed(memes, {
               disableEveryone: true
           })
           .then(e => e.channel.sendEmbed(tags, {
                   disableEveryone: true
               })
               .then(_ => e.channel.sendEmbed(mods, {
                   disableEveryone: true
               }))
               .then(_ => e.channel.sendEmbed(images, {
                   disableEveryone: true
               }))
               .then(_ => e.channel.sendEmbed(voice, {
                   disableEveryone: true
               }))
               .then(_ => e.channel.sendEmbed(info, {
                   disableEveryone: true
               }))
               .then(_ => e.channel.sendEmbed(melmsie, {
                   disableEveryone: true
               })))
   }
