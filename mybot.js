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

	if (command === "overwatch") {
		message.channel.sendMessage("Come play overwatch, <@190173742926790656>!");
	}

	if (command === "drunkiwan") {
		message.channel.sendMessage("Of course he's drunk, der Mann drinks white russians like water.");
	}

	if (command === "table") {
		message.channel.sendMessage('(╯°□°）╯︵ ┻━┻')
	}
	
    if (command === "ping") {
        message.channel.sendMessage("pong");
    }

    if (command === "bot") {
        message.reply("\n \nCommands: \n \n`/say [message]` - Speak on behalf of Markos. \n \n`!cookie` - What could happen? \n" + 
        	"\n`!table` - Warning, only use when you're angry. \n \n`!ping` - Pong! \n \n`.lul` - LUL \n");
        message.delete()
        	
    }

    if (message.content.startsWith("/say")) {
        message.channel.sendMessage(args.join(" "));
        message.delete()
    }
});

bot.on('ready', () => {
  console.log("Let's Go!");
});

bot.login(config.token);