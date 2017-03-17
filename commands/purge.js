exports.run = function (client, msg, args) {
    let count = parseInt(args[1]);
    try {
        msg.channel.fetchMessages({
            limit: (count + 1)
        }).then((messages) => {
            messages.deleteAll();
        });
    } catch (e) {
        console.log(e)
    }
}
