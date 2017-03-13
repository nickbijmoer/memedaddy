exports.run = function (client, msg, args) {
    var zalgo = require("zalgotxt");
    msg.reply(zalgo(args.join(" ")));
}
