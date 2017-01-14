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
    message.reply("I only hug people I like.");
  }

  if (command === "hug") { //Melmsie
    if (message.author.id !== '172571295077105664') return;
    message.reply("Fick dich! Sie werden nie eine Umarmung haben!");
  }

  if (command === "hug") { //Iwan
    if (message.author.id !== '142076624072867840') return;
    message.reply("You get a hug for now. I might change my mind though.");
  }

  if (command === "hug") { //Samoxive
    if (message.author.id !== '145456746721312768') return;
    message.reply("You get eine hug");
  }

  if (command === "hug") { //firearrow
    if (message.author.id !== '125300331419533312') return;
    message.reply("You get 2 hug");
  }

  if (command === "hug") { //tc
    if (message.author.id !== '187938633989226497') return;
    message.reply("Your picture scares me. No hug.");
  }

  if (command === "hug") { //Heasummn
    if (message.author.id !== '114094000100737024') return;
    message.reply("You say 'Screw you markos', no hug for you ever Hündin. ");
  }

  if (command === "hug") { //tuxy
    if (message.author.id !== '219101103894167552') return;
    message.reply("Fick dich!");
  }

  if (command === "hug") { //Takosara
    if (message.author.id !== '190173742926790656') return;
    message.reply("You play genji. I will think about hugging you.");
  }

  if (command === "hug") { //tbodt
    if (message.author.id !== '155417194530996225') return;
    message.reply("You make me say lul too much, no hug for you.");
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