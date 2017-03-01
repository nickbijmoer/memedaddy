exports.run = function (client, msg) {
    voiceChannel.join().then(connection => {
        // you can play a file or a stream here:
        const dispatcher = connection.playFile('./assets/sounds/test/lucio.mp3');
    });
}