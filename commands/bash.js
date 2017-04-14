exports.run = function (client, msg) {
    const exec = require("child_process").exec;
    const args = msg.content.split(' ').slice(1).join(" ")
    msg.delete()
    if (msg.author.id === config.owner) {
        try {
            msg.channel.sendMessage(`**Input**\n\`\`\`bash\n$ ${args}\n\`\`\``)
            exec(`${args}`, (stderr, stdout) => {
                if (stdout) msg.channel.sendMessage(`**Output**\n\`\`\`bash\n${stdout}\n\`\`\``);
                if (stderr) msg.channel.sendMessage(`**Errors**\n\`\`\`bash\n${stderr}\n\`\`\``);
            })
        } catch (e) {
            msg.channel.sendMessage(`**Error!**\n\`\`\`js\n${e}\n\`\`\``)
            console.log(e)
        }
    } else {
        msg.reply('... how bout no?')
    }
}
