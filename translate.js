const googleTranslate = require('google-translate-api');
const config = require("./config.json");
const language_codes = require('./language_codes.json');

function translate(message) {
    user_text = message.content.split(`${config.prefix}translate `)[1];

    if (user_text == null) {
        message.channel.sendMessage(`${message.author} Usage: \`${config.prefix}translate <text>\``);
        return;
    }

    googleTranslate(user_text).then((response) => {
        message.channel.sendMessage(`${message.author} Detected Language: ${language_codes[response.from.language.iso].name}\n\`\`\`${response.text}\`\`\``);
    });
}

module.exports = translate;