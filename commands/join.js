exports.run = function (client, msg) {
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) {
        return message.reply(`Please be in a voice channel first!`);
    }
    voiceChannel.join()
        .then(connnection => {
            const dispatcher = connection.playFile('./assets/sounds/test/lucio.mp3');
            dispatcher.on('end', () => {
                voiceChannel.leave();
            });
        });
}