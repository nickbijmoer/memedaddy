exports.run = function (client, msg, args, settings, Discord) {

    const voiceChannel = msg.member.voiceChannel;
    if (!voiceChannel) {
        return msg.reply(`Please be in a voice channel first!`);
    } else {
        msg.react('👌')
        voiceChannel.join().then(connection => {
            // you can play a file or a stream here:
            const dispatcher = connection.playFile('./horn.mp3')
            dispatcher.on('end', () => {
                voiceChannel.leave();
            });
        });
    }
}
