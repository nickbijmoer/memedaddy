const axios = require('axios')

const { randomInArray } = require('../utils')

function fixURL (uri) {
  uri = uri
    .replace(/&amp;/g, '&')
    .replace(/http(s)?:\/\/(m\.)?imgur\.com/g, 'https://i.imgur.com')
    .replace(/(\/gallery|\?r)/g, '')

  if (uri.includes('imgur') && uri.substr(-4, 1) !== '.') {
    uri += '.png'
  }

  return uri
}

exports.run = function (client, msg, args, config, Discord) {
  const req = axios('http://reddit.com/r/me_irl/new.json', {
    params: {
      sort: 'default',
      count: 50
    }
  })

  Promise.all([msg.channel.sendMessage('Your post is on its way!'), req])
    .then(([msg, req]) => {
      msg.delete()

      const post = randomInArray(req.data.data.children).data
      const fixedUrl = fixURL(post.url)

      const embed = new Discord.RichEmbed()
        .setColor('#3676b3')
        .setTitle(post.title)
        .setAuthor(`/u/${post.author}`)
        .setFooter('Powered by /r/me_irl')
        .setImage(fixedUrl)
        .setURL(fixedUrl)

      msg.channel.sendEmbed(embed, { disableEveryone: true })
    })
    .catch(err => {
      console.error(err)

      msg.reply('sorry but something went wrong...')
    })
}

exports.help = '**Usage: `pls me_irl`**\nReturns a random image from the subreddit me_irl'
