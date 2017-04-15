exports.run = function (client, msg, args, config, Discord) {
    const exec = require("child_process").exec;
    const argz = msg.content.split(' ').slice(1).join(" ")
    msg.delete()
    if (msg.author.id === config.owner) {
        try {
            msg.channel.sendMessage(`**Input**\n\`\`\`bash\n$ ${argz}\n\`\`\``)
            exec(`${argz}`, (stderr, stdout) => {
                if (stdout) msg.channel.sendMessage(`**Output**\n\`\`\`bash\n${stdout}\n\`\`\``);
                if (stderr) msg.channel.sendMessage(`**Errors**\n\`\`\`bash\n${stderr}\n\`\`\``);
            })
        } catch (e) {
            msg.channel.sendMessage(`**Error!**\n\`\`\`js\n${e}\n\`\`\``)
            console.log(date() + e)
        }
    } else {
        msg.reply('... how bout no?')
    }
}
