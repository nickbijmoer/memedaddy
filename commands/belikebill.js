exports.run = function (client, msg, args, config) {
 
    msg.channel.sendMessage(`Please provide your meme with \`message <your meme>\`\nExample: \`\`\`This is ${msg.author.username}.\n\n(the part you will add).\n\nBe like ${msg.author.username}.\`\`\``)
        .then(() => {

            msg.channel.awaitMessages(response => response.content.startsWith(`message`), {
                    max: 1,
                    time: 30000,
                    errors: ['time'],
                })
                .then((collected) => {
                    var message = collected.first().content.split(' ').pop()
                    let username = msg.author.username.replace(/ /gi, '%20')
                    msg.channel.sendMessage(`http://belikebill.azurewebsites.net/billgen-API.php?text=This%20is%20${username}%0D%0A%0D%0A${message}%0D%0A%0D%0ABe%20Like%20${username}`)
                    
                })
                .catch(() => {
                    msg.channel.sendMessage('There was no collected message within the time limit!')
                })

        })


}
