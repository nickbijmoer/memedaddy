/**
 * Created by Matrix159 on 4/13/2017.
 */

const rp = require('request-promise')
exports.run = function (client, msg, args, config) {

  msgSplit = msg.content.split(" ")
  if (!(msgSplit.length === 5))
  {
    msg.channel.send(`Please enter in format \`\`${config.prefix[0]} fo [type] [Who to fuck] [The fucker]\`\``)
    return
  }
  let type = msgSplit[2]
  let name = msgSplit[3]
  let from = msgSplit[4]
  let options = {
    uri: `https://www.foaas.com/operations`,
    headers: {
      'Accept': 'application/json'
    },
    json: true // Automatically stringifies the body to JSON}
  }
  rp(options)
    .then(function (body) {

      let endpoint = body[Math.floor(Math.random() * body.length)];
      options.uri = "https://www.foaas.com" + endpoint.url
      rp(options).then((body) => {
        msg.channel.send(`${body.message} ${body.subtitle}`)
      }).catch((err) => console.log(err))
    })
    .catch(function (err) {
      console.log(err)
    })
  //msg.channel.send(`${body.message} ${body.subtitle}`
}