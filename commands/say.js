exports.run = function (client, msg, args) {
    msg.delete()
    msg.channel.send(args.join(' '))
}
