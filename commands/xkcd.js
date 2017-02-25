exports.run = function (client, msg, args) {
    const request = require('request');
    const cheerio = require('cheerio');
    let xkcdLink = false;
    const options = {
        url: `https://duckduckgo.com/html/?q=${args}%20xkcd`,
        headers: {
            'accept-language': 'en-US,en;q=0.8',
            'upgrade-insecure-requests': 1,
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) ' +
                'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36',
        },
    };
    request(options, (err, res, bod) => {
        const xkcdBody = cheerio.load(bod);
        try {
            xkcdBody('.result__a').each((i, link) => {
                const href = link.attribs.href;
                if (href.search(/^https?:\/\/(www\.)?xkcd\.com\//) !== -1 && xkcdLink === false) {
                    xkcdLink = href;
                }
            });
        } catch (e) {
            msg.channel.sendMessage('There was a problem with this command, please send a bug report \`pls bug <message>\`.');
        }
        if (!xkcdLink) {
            msg.channel.sendMessage(`I'm sorry ${msg.author}, I couldn't find a xkcd. Well, I'm not THAT sorry...`);
        } else {
            request(xkcdLink, (error, response, body) => {
                if (!error && response.statusCode === 200) {
                    const htmlBody = cheerio.load(body);
                    if (htmlBody('#comic').children().get(0).tagName === 'img') {
                        const xkcdImg = htmlBody('#comic').children().first();
                        msg.channel.sendMessage('\n' +
                            `**${htmlBody('#ctitle').text()}**\n` +
                            `*${xkcdImg.attr('title')}*\n` +
                            '\n');
                            msg.channel.sendFile(`https:${xkcdImg.attr('src')}`);
                    } else {
                        msg.channel.sendMessage(`I'm sorry ${msg.author}, I couldn't find a xkcd. Well, I'm not THAT sorry...`);
                    }
                }
            });
        }
    });
}

exports.help = "**Usage: \`pls xkcd <comic title>\`**\nWill return a comic from xkcd."