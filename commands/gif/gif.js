const request = require("request")

if (command === "gif") {
        msg.channel.sendMessage("Ｓｅａｒｃｈｉｎｇ　ｆｏｒ　ｙｏｕｒ　ｇｉｆ．．．").then(mesg => {
            request({
                url: 'http://api.giphy.com/v1/gifs/search?q=' + encodeURIComponent(args.join(" ")) + '&api_key=' + config.giphy + '&limit=25'
            }, function (err, res, body) {
                if (err) {
                    mesg.edit("No gifs found.");
                    return console.log(err);
                }
                let jsonBody = JSON.parse(body);
                if (jsonBody["data"].length === 0) {
                    mesg.edit('No gifs found')
                    return;
                }
                result = jsonBody["data"];
                random_gif = result[Math.floor(Math.random() * result.length)]["images"]["original"]["url"];
                msg.channel.sendFile(random_gif).then(() => {
                    mesg.delete()
                })
            })
        })
    }