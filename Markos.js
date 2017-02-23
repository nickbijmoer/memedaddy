const config = require("./config.json")
const settings = require('./settings.json');
const Discord = require("discord.js")
const fs = require("fs")
const client = new Discord.Client();

const cleverbot = require("cleverbot.io")
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key)
clever.setNick("Markos")

let version = "v3"

client.login(config.token)

client.on("message", msg => {
  if (msg.author.bot) return false;
  if (!msg.content.startsWith(settings.prefix)) return false;
  console.log(msg.content);

  let command = msg.content.substring(settings.prefix.length).toLowerCase().split(" ")[0]
  let args = msg.content.split(" ").slice(2)
  console.log(command);
  console.log(args);

  fs.access("./commands/" + command + ".js", fs.constants.R_OK, (err) => {
    console.log('Access: ' + err);
    if (err) return false;

    try {
      console.log('Deleting entry: ' + require.resolve('./commands/' + command));
      delete require.cache[require.resolve("./commands/" + command)];
      let comm = require("./commands/" + command);
      console.log(comm)
      console.log(comm.run)
      comm.run(client, msg, args, settings, Discord);
    } catch (e) {
      console.log(e)
    };
  });
})

client.on("ready", () => {
    console.log("Markos " + version + " loaded successfully. 👌");
    client.user.setGame('pls help 👌');
    clever.create(function (err, session) {
        if (err) return console.log("Error creating cleverbot session")
        console.log("Cleverbot session created. 👌")
    });
    console.log("Welcome, Austin. 👀");
})