const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client();

client.login(config.token);

client.on("message", msg => {
  if (msg.author.bot) return false;
  if (!msg.content.startsWith(config.prefix)) return false;

  let command = msg.content.substring(config.prefix.length).toLowerCase().split(" ")[0]
  let args = msg.content.split(" ").slice(2)

  if (command === "help") {
    if (args[0]) {
      msg.channel.sendMessage(require(`./commands/${args[0]}`).help)
    } else {
      let arr = [];
      fs.readdirSync("./commands/").forEach(function (file) {
        arr.push(file.replace(".js", ""));
      });
      msg.channel.sendMessage(`**__Here are my commands, mmkay?__**\n \n\`${arr.join("\n")}\`\n \nTo see specific help or information about a command do \`pls help <command name>\`\n\nIf you find any bugs or errors, please do \`pls bug <bug report>\``);
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

  if (command === "eval") {
    if (msg.author.id === config.owner) {
      try {
        let dank = eval(args.join(" "));
        msg.channel.sendMessage('**Result:**\`\`\`js\n ' + dank + '\n\`\`\`')
      } catch (e) {
        msg.channel.sendMessage(":warning: **ERROR** :warning: \`\`\`\n" + e + "\n\`\`\`")
      }

    } else {
      msg.reply('You\'ve been caught! Nice try!')
      client.users.get(config.owner).sendMessage("**" + msg.author.username + '#' + msg.author.discriminator + " (" + msg.author.id + ")" + ":**\n" + "This person was trying to use the eval command!\n" + args.join(" "));
    }
  }
})


client.on("ready", () => {
  console.log("Markos " + config.version + " loaded successfully. 👌");
  client.user.setGame('pls help 👌 👀');
  console.log("Welcome, Austin. 👀");
})

process.on("unhandledRejection", err => {
  console.error("Uncaught Promise Error: \n" + err.stack);
});