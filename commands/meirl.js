exports.run = function (client, msg, args, config, Discord) {
    let request = require("request");
    msg.channel.sendMessage('Your post is on it\'s way!').then(mesg => {
        request.get("http://www.reddit.com/r/me_irl/new.json?sort=default&count=50", function (e, r, b) {
            if (!e && r.statusCode == 200) {
                let data = JSON.parse(b).data.children;
                let post = data[Math.floor(Math.random() * data.length)].data;
                post.url = post.url.replace(/http(s)?:\/\/(m\.)?imgur\.com/g, "https://i.imgur.com");
                post.url = post.url.replace(new RegExp('&amp;', 'g'), "&");
                post.url = post.url.replace("/gallery", "");
                post.url = post.url.replace("?r", "");

                if (post.url.indexOf("imgur") > -1 && post.url.substring(post.url.length - 4, post.url.length - 3) != ".") {
                    post.url += ".png";

                }
                const embed = new Discord.RichEmbed()
                    .setTitle(post.title)
                    .setAuthor("/u/" + post.author)
                    .setColor("#3676b3")
                    .setDescription("")
                    .setFooter("Powered by r/me_irl")
                    .setImage(encodeURI(post.url))
                    .setURL(post.url);
                mesg.delete();
                msg.channel.sendEmbed(
                    embed, {
                        disableEveryone: true
                    }
                );
            }
        })

    })

}

exports.help = "**Usage: \`pls me_irl\`**\nReturns a random image from the subreddit me_irl"