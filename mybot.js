var Discord = require("discord.js");
var bot = new Discord.Client();
const config = require("./config.json")
let prefix = config.prefix

let posGreet = ["hi", "hello", "hey", "yo", "greetings", "hallo", "Grüße"]
let posBye = ["bye", "goodbye", "later", "peace", "cya", "see you later", "tschüss", "auf wiedersehen", "bis später"]
let posThanks = ["thanks", "thank you", "vielen dank", "danke", "gracias"]
let posInsults = ["bitch", "fucker", "fuck", "hoe", "slut", "shit", "penis", "dick", "rude", "ass", "bastard", "nerd", "noob", "cunt", "dipshit", "dork", "dumb", "pussy"]

let GREETINGS = ["hi.", "Does it look like I would want to talk to YOU?", "Shut up. I'm just here to Fick Hündinnen und bekommen Geld ", "I'm glad you are here, now take off your pants.", "ok, now leave.", "WELCOME TO THE MARKOS KINGDOM BITCH", "OMG gaaaw I am so happy to see you", "dndnfasdkndfd", "Did you shower today?", "Has anyone told you how good you look today?", "Welcome to my house, baby take control now, we dont even go out", "I'm not real", "Please don't talk to me. I'm not over what you did last night", "bugs bunny", "Omg did you see last nights episode?", "`Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal.Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this.But, in a larger sense, we can not dedicate—we can not consecrate—we can not hallow—this ground. The brave men, living and dead, who struggled here, have consecrated it, far above our poor power to add or detract. The world will little note, nor long remember what we say here, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the unfinished work which they who fought here have thus far so nobly advanced. It is rather for us to be here dedicated to the great task remaining before us—that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion—that we here highly resolve that these dead shall not have died in vain—that this nation, under God, shall have a new birth of freedom—and that government of the people, by the people, for the people, shall not perish from the earth.`" ];
let THANKS = ["You pay me.", "We aren't friends, I'm just here till my times up.", "I think about killing you every day.", "God damn man! Be cool.", "bitte", "I didn't do that for you", "One day, this will all come back to haunt you.", "uhhhh...", "No, thank YOU for those dick pics last night ;)", "It's what I do best", "You welcome Zucker", "You are soooo welcome", "You are welcome.", "yup.", "k", "kthxbai" ];
let BYE = ["THANK THE LORD! THEY ARE GONE", "I hate to see you go, but I love to watch that ass leave", "Auf Wiedersehen bitch", "bye baby", "bye", "k", "Goooooood byyyye *singsong voice*", "now that they are gone, lets talk shit about them", "I will miss you", "Ich werde dich jeden Augenblick vermissen", "*blows kisses*", "good.", "Wait, why?? I thought things were going well! OMMMMGGGG please don't leave!", "Baby come back!!! You can blame it all on meeeee", "Uh no. This is done when I say its done.", "oh."];
let MENTION = ["Please go order me a pizza.", "My dog is plotting to shit in your shoe, and I encourage it.", "Have you ever felt the love of a women?", "What is love? Baby don't hurt me no more!", "How much is 20lbs of weed worth in your neck of the woods? Asking for a friend", "Dear lord, you need a life", "I'm not real *cries*", "Brah, Sprichst du überhaupt Deutsch?", "Can't talk. Currently eating pussy... The cat you sick bastard", "My favorite movie is Cane Toads. Its about Toads in Austrailia who were brought in to eat the bugs that had infested their sugar cane. However, it didn't eat those bugs and instead ate every other bug in sight! They have no natural predators in that area so they grew rapidly, destroying the ecosystem. They are so poisonous that you can kill them and smoke them, and you'll get higher than weed could ever take you. Some people are in love with the cane toads and keep them as pets, while others despise them and go out of their way to run them over with their cars. There is also strange sexual music during the time where we learn about reproduction. Then an old man comes on screen and shows us the sound a cane toad makes while *finishing.* If the cane toad feels threatened or is squeezed too hard, it will shoot out a poisonous liquid that comes out like a popped pimple. Again, this movie is Cane Toads. I am Markos the Bot, amature movie reviewist/scientist and I give this 2 big thumbs up the butt. ", "hold on... going through tunnel... losing you", "no.", "Du bist mien Perle", "Willst du mich heiraten?", "Go check out my new podcast", "dkfdkdfx dfxk dfxddxdxds mds kmdxfm dsxmdszxk dk yousuck dxfckdszm vcxkldxsfm" ];
let INSULTS = ["Fuck diese Scheiße.", "Excuse me. This is a safe, clean environment. Do not use that language.", "why don’t you just kiss my ass?", "Do not take that tone with me.", "Strong words from such a ridiculously named person", "Be mature, asshole", "Language like that turns me on so hard", "Fuck off", "go fuck yourself, k?", "k", "Heben Sie sogar?", "I don't care what you think of me.", "Sticks and stones may break my bones, but your words suck dick.", "Hey, that's what your mom said!", "Deine Oma masturbiert im stehen!", "Deine Mutter geht in der Stadt huren", "Du bist besonders... nur wie jeder sonst", "Küss meinen Arsch", "Leck mich", "Verpiss dich!", "Sohn einer Hündin!", "Shizcoff", "Du bist ein großes Arschloch"]

function isArrayInString(str, list) {
    for (let word in list) {
        if (str.includes(word)) return true;
    }
    
    return false;
}

bot.on("message", message => {
	console.log(message.content)

//anti-bot line
	if(message.author.bot) return;


  else if (message.content.toLowerCase().includes("markos")) {
    if (isArrayInString(message.content.toLowerCase(), posGreet)) {
      message.reply(GREETINGS[Math.floor(Math.random() * GREETINGS.length)]);
    } else if (isArrayInString(message.content.toLowerCase(), posThanks)) {
      message.reply(THANKS[Math.floor(Math.random() * THANKS.length)]);
    } else if (isArrayInString(message.content.toLowerCase(), posBye)) {
      message.reply(BYE[Math.floor(Math.random() * BYE.length)]);
    } else if (isArrayInString(message.content.toLowerCase(), posInsults)) {
      message.reply(INSULTS[Math.floor(Math.random() * INSULTS.length)]);
    } else { 
      message.reply(MENTION[Math.floor(Math.random() * MENTION.length)]);
    }
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
    } else if (message.author.id === '187938633989226497')  { //tc
        message.reply("Your picture scares me. No hug.");
    } else if (message.author.id === '114094000100737024')  { //Heasummn
        message.reply("You say 'Screw you markos', no hug for you ever Hündin.");
    } else if (message.author.id === '219101103894167552')  { //tuxy
        message.reply("You taught me how to hug. You get fünf");
    } else if (message.author.id === '190173742926790656')  { //Takosara
        message.reply("You get eine hug for now, und you get eine hug after you play overwatch with my bitch, Melmsie.");
    } else if (message.author.id === '155417194530996225')  { //tbodt
        message.reply("You make me say lul too much, no hug for you.");
    } else if (message.author.id === '108770327776997376')  { //Irontoast
        message.reply("As a fellow bot, you know we can't ACTUALLY hug.");
    } else if (message.author.id === '98992981045964800')  { //matrix
        message.reply("I'll hug you when your bot learns how to be nice.");
    } else if (message.author.id === '98992981045964800')  { //satisfied
        message.reply("A weird arm hug for you");
    } else {
        message.reply("I only hug people I know. Talk to me more often if you want hugs");
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
  console.log("Let's get it!");
});

bot.login(config.token);