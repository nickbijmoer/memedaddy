module.exports = {
    //usage: 'support - Need Markos support? Get a link to the Markos support server!',
    run: (client, msg) => {
        msg.channel.sendMessage("Oh, need to talk to Melmsie? Ｃｈｅｃｋ　ｙｏ　ＤＭ＇ｓ　ｂｏｉ");
        msg.author.sendMessage("Here's an invite to Melmsie's server: https://discord.gg/B4HZAtA");
    }
}
exports.help = "Markos will send you a link to the support server."