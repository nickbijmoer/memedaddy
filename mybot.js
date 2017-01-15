var Discord = require("discord.js");
var bot = new Discord.Client();
const config = require("./config.json")
let prefix = config.prefix

let GREETINGS = ["Hey Du Hurensohn!", "Hallo Arschloch", "What up, Dingus?", "Don't talk to me", "Hi?", "Hello", "Sup"];
let THANKS = ["You're welcome.", ";)", "Of Course!", "Mhm", "Yup.", "bitte" ]


bot.on("message", message => {
	console.log(message.content)

//anti-bot line
	if(message.author.bot) return;


	else if (message.content.toLowerCase().startsWith("hi markos")) {
	  message.channel.sendMessage(GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
	}

	else if (message.content.toLowerCase().startsWith("thanks markos")) {
    message.channel.sendMessage(THANKS[Math.floor(Math.random() * THANKS.length)]);
  }

  else if (message.content.toLowerCase().startsWith("wtf markos")) {
    //if (message.author.id !== '172571295077105664') return;
    message.channel.sendMessage('¯\\\_(ツ)_/¯');
  }

	else if (message.content.toLowerCase().startsWith(".lul")) {
    message.channel.sendMessage('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
  }

  else if (message.content.toLowerCase().includes("been bamboozled")) {
    message.channel.sendMessage("Get reckt!");
  }

  else if (message.content.toLowerCase().includes("nintendo switch")) {
    message.channel.sendMessage("Fuck nintendo");
  }
    
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);

	let args = message.content.split(" ").slice(1);

	if (command === "cookie") {
		message.channel.sendMessage(":cookie:");
	}

	if (command === "table") {
		message.channel.sendMessage('(╯°□°）╯︵ ┻━┻')
	}
	
  if (command === "ping") {
    message.channel.sendMessage("pong");
  }

  if (command === "hug") {    
    if (message.author.id === '172571295077105664') { //Melmsie
        message.reply("Fick dich! Sie werden nie eine Umarmung haben!");
    } else if (message.author.id === '142076624072867840') { //Iwan
        message.reply("You get a hug for now. I might change my mind though.");
    } else if (message.author.id === '145456746721312768')  { //Samoxive
        message.reply("You get eine hug");
    } else if (message.author.id === '125300331419533312')  { //firearrow
        message.reply("You get 2 hug");
    } else if (message.author.id === '145456746721312768')  { //tc
        message.reply("Your picture scares me. No hug.");
    } else if (message.author.id === '145456746721312768')  { //Heasummn
        message.reply("You say 'Screw you markos', no hug for you ever Hündin.");
    } else if (message.author.id === '145456746721312768')  { //tuxy
        message.reply("You taught me how to hug. You get fünf");
    } else if (message.author.id === '145456746721312768')  { //Takosara
        message.reply("You get eine hug for now, und you get eine hug after you play overwatch with my bitch, Melmsie.");
    } else if (message.author.id === '145456746721312768')  { //tbodt
        message.reply("You make me say lul too much, no hug for you.");
    } else {
        message.reply("I only hug people I like.");
    }
}


  if (command === "help") {
    message.reply("\n \nCommands: \n \n`/say [message]` - Speak on behalf of Markos. [Owner Only] \n \n`!cookie` - What could happen? \n" + 
      "\n`!table` - Warning, only use when you're angry. \n \n`!ping` - Pong! \n \n`.lul` - LUL \n \n`!hug` - Do you get a hug from Markos?");
    message.delete()     	
  }

  if (message.content.startsWith("/say")) {
    message.channel.sendMessage(args.join(" "));
    message.delete()
  }

});

bot.on('ready', () => {
  console.log("woo!");
});

bot.login(config.token);