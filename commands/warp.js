exports.run = function (client, msg, args) {

    if (msg.mentions.users.size === 0) {
        return msg.channel.sendMessage("You must mention a user or provide a link!")
    } else {
        var Imagizer = require("imagizer");
        var project = new Imagizer.Project(500, 500);
        var layer1 = project.createLayer();

        msg.channel.sendMessage(":gear: Generating... please wait.").then(mesg => {
            const download = require('download');
 
download('http://unicorn.com/foo.jpg', 'test').then(() => {
    console.log('done!');
});
 
            var image1 = new Imagizer.Image();
            image1.load('test.jpg', function () {
                var obj = layer1.put(image1, 0, 0); // put image1 to a layer with position 0, 0 
                // edge detection combo 
                obj.applyEffect("edge" /*, {parameter1: "someValue"}*/ );
                obj.applyEffect("gray-scale");
                obj.applyEffect("invert");
                msg.channel.sendFile(test.jpg)
                project.exportTo("test.png");
            });
            

        })

    }

}