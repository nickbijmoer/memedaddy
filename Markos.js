const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

const cleverbot = require("cleverbot.io");
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key);
clever.setNick("Markos");


client.login(config.token);

client.on("message", msg => {
  if (msg.author.bot) return false;
  if (!msg.content.startsWith(config.prefix)) return false;

  let command = msg.content.substring(config.prefix.length).toLowerCase().split(" ")[0]
  let args = msg.content.split(" ").slice(2)

  if (command === "help") {
    if (args[0]) {
      msg.sendMessage(require(`./commands/${args[0]}`).help)
    } else {
      let arr = [];
      fs.readdirSync("./commands/").forEach(function (file) {
        arr.push(file.replace(".js", ""));
      });
      msg.channel.sendMessage(`**__Here are my commands, mmkay?__**\n \n\`${arr.join("\n")}\`\n \nTo see specific help or information about a command do \`pls help <command name>\`\nIf you find any bugs or errors, please let Melmsie#7331 know and he will fix it promptly.`);
    }
  } else {
    fs.access("./commands/" + command + ".js", fs.constants.R_OK, (err) => {
      if (err) return false;
      try {
        delete require.cache[require.resolve("./commands/" + command)];
        let comm = require("./commands/" + command);
        comm.run(client, msg, args, config, Discord);
      } catch (e) {
        console.log(e)
      };
    });
  };
})


client.on("ready", () => {
  console.log("Markos " + config.version + " loaded successfully. 👌");
  client.user.setGame('pls help 👌 👀');
  clever.create(function (err, session) {
    if (err) return console.log("Error creating cleverbot session")
    console.log("Cleverbot session created. 👌")
  });
  console.log("Welcome, Austin. 👀");
})