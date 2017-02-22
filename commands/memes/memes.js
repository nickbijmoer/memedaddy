const leet = require("1337")


    if (command === "vaporwave") {
        let text = args.join(" ").replace(/a/gi, "ａ").replace(/b/gi, "ｂ").replace(/c/gi, "ｃ").replace(/d/gi, "ｄ").replace(/e/gi, "ｅ").replace(/f/gi, "ｆ").replace(/g/gi, "ｇ").replace(/h/gi, "ｈ").replace(/i/gi, "ｉ").replace(/j/gi, "ｊ").replace(/k/gi, "ｋ").replace(/l/gi, "ｌ").replace(/m/gi, "ｍ").replace(/n/gi, "ｎ").replace(/o/gi, "ｏ").replace(/p/gi, "ｐ").replace(/q/gi, "ｑ").replace(/r/gi, "ｒ").replace(/s/gi, "ｓ").replace(/t/gi, "ｔ").replace(/u/gi, "ｕ").replace(/v/gi, "ｖ").replace(/w/gi, "ｗ").replace(/x/gi, "ｘ").replace(/y/gi, "ｙ").replace(/z/gi, "ｚ")
        msg.reply("**" + text + "**")
    }
    if (command === "superscript") {
        let text = args.join(" ").replace(/a/gi, "ᵃ").replace(/b/gi, "ᵇ").replace(/c/gi, "ᶜ").replace(/d/gi, "ᵈ").replace(/e/gi, "ᵉ").replace(/f/gi, "ᶠ").replace(/g/gi, "ᵍ").replace(/h/gi, "ʰ").replace(/i/gi, "ᶦ").replace(/j/gi, "ʲ").replace(/k/gi, "ᵏ").replace(/l/gi, "ˡ").replace(/m/gi, "ᵐ").replace(/n/gi, "ⁿ").replace(/o/gi, "ᵒ").replace(/p/gi, "ᵖ").replace(/q/gi, "ᑫ").replace(/r/gi, "ʳ").replace(/s/gi, "ˢ").replace(/t/gi, "ᵗ").replace(/u/gi, "ᵘ").replace(/v/gi, "ᵛ").replace(/w/gi, "ʷ").replace(/x/gi, "ˣ").replace(/y/gi, "ʸ").replace(/z/gi, "ᶻ")
        msg.reply("**" + text + "**")
    }


    if (command === "xd") {
        msg.channel.sendFile("https://cdn.discordapp.com/attachments/248546890361077760/272125523705069568/Screen_Shot_2017-01-05_at_3.05.28_PM_copy.png")
    }

    if (command === "ayylmao") {
        msg.channel.sendMessage(extras.ayy[Math.floor(Math.random() * extras.ayy.length)]);
    }



    if (command === "lul") {
        msg.channel.sendFile('http://files.gamebanana.com/img/ico/sprays/57822c19e1ad1.png');
    }

    if (command === "kappa") {
        msg.channel.sendFile("http://vignette4.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/Kappa.png")
    }

    if (command === "copypasta") {
        msg.channel.sendMessage(extras.copy[Math.floor(Math.random() * extras.copy.length)]);
    }

    if (command === "1337") {
        msg.reply(leet(args.join(" ")));
    }

