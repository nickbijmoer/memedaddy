const config = require('../config.json')
var plotly = require('plotly')("Melmsie", config.plotly)
exports.run = function (client, msg, args, config, Discord) {

    var data = [{
        x: [1, 2, 3],
        y: [1024, 512, 0],
        type: 'line'
    }];
    var layout = {
        fileopt: "overwrite",
        filename: "simple-node-example"
    };

    plotly.plot(data, layout, function (err, msg) {
        if (err) return console.log(err);
        console.log(msg);
    });
    msg.reply('Sorry, this command is coming soon!')
}