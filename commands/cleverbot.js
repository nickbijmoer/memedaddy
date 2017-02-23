const cleverbot = require("cleverbot.io")
clever = new cleverbot(config.cleverbot.token, config.cleverbot.key)
clever.setNick("Markos")
    
    if (msg.content.startsWith(client.user.toString())) {
        msg.channel.startTyping()
        clever.ask(args.join(" "), function (err, response) {
            msg.channel.stopTyping(true)
            msg.reply(response);
            
        });
    }