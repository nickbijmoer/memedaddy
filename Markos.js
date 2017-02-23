const config = require("./config.json")
const settings = require('./settings.json');
const Discord = require("discord.js")
const client = new Discord.Client();

const cleverbot = require("cleverbot.io")
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key)
clever.setNick("Markos")

let version = "v3"

client.login(config.token)

client.on("message", msg => {
    if (msg.author.bot) return false;
    if (!msg.content.startsWith(config.prefix)) return false;
    console.log(msg.content);

    let command = msg.content.substring(config.prefix.length).toLowerCase().split(" ")[0]
    let args = msg.content.split(" ").slice(2)


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
