var Discord = require("discord.js");
var bot = new Discord.Client();
const config = require("./config.json")
var cleverbot = require("cleverbot.io"),
const clever = new cleverbot(config.clever, config.key);
cbot.setNick("Markos");
const stories = require("./stories.json")
let prefix = config.prefix
let request = require('request');

let ayy = ["http://i.imgur.com/G1h11mQ.png", "https://giphy.com/gifs/6OEeB9rxvDyzC", "https://s-media-cache-ak0.pinimg.com/originals/06/c0/9b/06c09be319e549e0fccaa88424ea271a.jpg", "http://i3.kym-cdn.com/photos/images/facebook/000/632/652/6ca.jpg", "http://t6.rbxcdn.com/f9407db64c8f16abc58ce0ff44741534", "https://i.ytimg.com/vi/kiEqGhgWf5Y/maxresdefault.jpg"]
let coin = ["Heads", "Tails"]
let ball = ["It is certain", "It is decidedly so", "Without a doubt", "Yes, definitely", "You may rely on it", "It is certain", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "It is certain", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
let story = [stories.birth, stories.abusive, stories.confused, stories.birdbees, stories.mom, stories.no, stories.lion, stories.boy]


bot.on("message", message => {
	console.log(message.content)

 //anti-bot line
	if(message.author.bot) return;


  clever.create(function (err, session) {
    if (message.content.startsWith("<@270904126974590976>")) {
      clever.ask(message.content, function (err, response) {
        message.reply(response); 
      });
    }
  });

    
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "cookie") {
		message.channel.sendMessage("No cookies from me.");
	}

  
  request({url:'https://api.github.com/repos/Melmsie/Markos/commits', headers:{'User-Agent':'melmsie'}}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      jsonBody = JSON.parse(body)

    if (command === "info") {
      message.channel.sendMessage("", {embed: {
      color: 3447003,
      author: {
        name: `Markos`,
        icon_url: bot.user.avatarURL
      },
      title: '',
      
      description: 'V1.1.3',
      fields: [
        {
          name: 'Commands',
          value: 'To see the current commands for Markos, do !help'
        },
        {
          name: 'Most Recent Commit',
          value: jsonBody[0].commit.message
        },
        {
          name: 'Lines of Code',
          value: '170'
        },
        {
          name: 'Requests',
          value: 'Have a request for a command? Feel free to PM Melmsie, or submit a pull request for Markos [here](https://github.com/melmsie/Markos).'
        }
      ],
      timestamp: new Date(),
      
        }});
          }

      }
    })

  if (command === "story") {
    message.channel.sendMessage(story[Math.floor(Math.random() * story.length)]);
  }

  if (command === "coin") {
    message.channel.sendMessage(coin[Math.floor(Math.random() * coin.length)]);
  }

  if (command === "ayylmao") {
    message.channel.sendMessage(ayy[Math.floor(Math.random() * ayy.length)]);
  }

  if (command === "8ball") {
    message.channel.sendMessage(ball[Math.floor(Math.random() * ball.length)]);
  }

  if (command === "lul") {
    message.channel.sendMessage('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
  }

	if (command === "table") {
		message.channel.sendMessage('(╯°□°）╯︵ ┻━┻')
	}
	
  if (command === "ping") {
    message.channel.sendMessage("pong");
  }

  if (command === "hug") {    
    if (message.author.id === '172571295077105664') { //Melmsie
        message.reply("No hugs, I still hate you for creating me in this nasty world.");
    } else if (message.author.id === '142076624072867840') { //Iwan
        message.reply("NO");
    } else if (message.author.id === '145456746721312768')  { //Samoxive
        message.reply("I guess you get a hug, <@172571295077105664> said I have to hug you whenever I want. ");
    } else if (message.author.id === '125300331419533312')  { //firearrow
        message.reply("You get 3 hug");
    } else if (message.author.id === '187938633989226497')  { //tc
        message.reply("Your picture scares me. No hug.");
    } else if (message.author.id === '114094000100737024')  { //Heasummn
        message.reply("You say 'Screw you markos', no hug for you ever Hündin. Well, maybe one. Just be nice to me.");
    } else if (message.author.id === '219101103894167552')  { //tuxy
        message.reply("You taught me how to hug. You get fünf");
    } else if (message.author.id === '190173742926790656')  { //Takosara
        message.reply("You get eine hug for now, und you get eine hug after you play overwatch with my bitch, <@172571295077105664>.");
    } else if (message.author.id === '155417194530996225')  { //tbodt
        message.reply("You make me say lul a lot. I guess you get a hug.");
    } else if (message.author.id === '108770327776997376')  { //Irontoast
        message.reply("As a fellow bot, you know we can't ACTUALLY hug.");
    } else if (message.author.id === '98992981045964800')  { //matrix
        message.reply("I'll hug you when your bot learns how to be nice.");
    } else if (message.author.id === '98992981045964800')  { //satisfied
        message.reply("A weird arm hug for you");
    } else {
        message.reply("Free hug!");
    }
  }


   if (command === "help") {
    message.channel.sendMessage("Sliding into your DM's...");
    message.author.sendMessage("\n \nCommands: \n \n`!info` - Displays current info for Markos \n \n`!say [message]` - Speak on behalf of Markos. [Owner Only] \n \n`!cookie` - Markos doesn't give cookies. \n" + 
      "\n`!table` - Only use when you're angry. \n \n`!ping` - Pong! \n \n`!lul` - LUL \n \n`!hug` - Do you get a hug from Markos? \n \n`!ayylmao` - ayyyyyy \n " + 
      "\n`!transate` - Coming Soon! \n \n`!8ball [message]` - Markos consults his magic 8-ball for you \n \n`!coin` - Flip a coin \n" +
      "\n`!story` - Markos will tell you a story.");
       	
  }

  if (message.content.startsWith("/say")) {
    if (message.author.id !== '172571295077105664') return;
    message.channel.sendMessage(args.join(" "));
    message.delete()
  }

});

bot.on('ready', () => {
  console.log("Markos v1.1.3 loaded successfully.");
  console.log("Hello, Austin.");
});

bot.login(config.token);