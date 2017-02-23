exports.run = function (client, msg, args) {
    //usage: 'superscript <message> - Displays whatever the <message> is, in superscript form.',
    let text = args.join(" ").replace(/a/gi, "ᵃ").replace(/b/gi, "ᵇ").replace(/c/gi, "ᶜ").replace(/d/gi, "ᵈ").replace(/e/gi, "ᵉ").replace(/f/gi, "ᶠ").replace(/g/gi, "ᵍ").replace(/h/gi, "ʰ").replace(/i/gi, "ᶦ").replace(/j/gi, "ʲ").replace(/k/gi, "ᵏ").replace(/l/gi, "ˡ").replace(/m/gi, "ᵐ").replace(/n/gi, "ⁿ").replace(/o/gi, "ᵒ").replace(/p/gi, "ᵖ").replace(/q/gi, "ᑫ").replace(/r/gi, "ʳ").replace(/s/gi, "ˢ").replace(/t/gi, "ᵗ").replace(/u/gi, "ᵘ").replace(/v/gi, "ᵛ").replace(/w/gi, "ʷ").replace(/x/gi, "ˣ").replace(/y/gi, "ʸ").replace(/z/gi, "ᶻ")
    msg.reply("**" + text + "**")
}
exports.help = "Translates your message into superscript."