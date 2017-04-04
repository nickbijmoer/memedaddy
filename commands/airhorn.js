exports.run = function (client, msg, args, settings, Discord) {
    let song = ""

    const yt = require('ytdl-core');
    let airhorn = ["https://www.youtube.com/watch?v=dj20Ao4Vw9w", "https://www.youtube.com/watch?v=XDvuAYySJj0", "https://www.youtube.com/watch?v=IpyingiCwV8", "https://www.youtube.com/watch?v=66F2-af-0dU", "https://www.youtube.com/watch?v=DpDmYVCSCtg"]
    let boi = ["https://www.youtube.com/watch?v=pCOb6Fykxz0"]
    let trump = ["https://www.youtube.com/watch?v=UxIODblkmzU", "https://www.youtube.com/watch?v=niSLZDVApdQ"]
    let cena = ["https://www.youtube.com/watch?v=9EPL_4HyCFQ", "https://www.youtube.com/watch?v=jydEP1EjNx4", "https://www.youtube.com/watch?v=VQGDUJY2k0E"]
    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {
        return msg.reply(`Please be in a voice channel first!`);
    }
    if (!args) {
        return msg.reply(`I need a video to play first! Try using one of these:\nairhorn, datboi, cena, trump\nIf you have suggestions for more voice memes, PM Melmsie!`);
    }
    if (args === 'airhorn') {
        song === (randomInArray(airhorn))
    } else if (args === 'datboi') {
        song === (randomInArray(boi))
    } else if (args === 'cena') {
        song === (randomInArray(cena))
    } else if (args === 'trump') {
        song === (randomInArray(trump))
    }

    voiceChannel.join()
        .then(connnection => {
            let stream = yt(song, {
                filter: 'audioonly'
            });
            const dispatcher = connnection.playStream(stream);
            dispatcher.on('end', () => {
                voiceChannel.leave();
            });
        });
}
