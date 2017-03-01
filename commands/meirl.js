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

exports.run = async function (client, msg, args, config, Discord) {
  const req = axios('http://reddit.com/r/me_irl/new.json', {
    params: {
      sort: 'default',
      count: 50
    }
  })

  const [ notice, res ] = await Promise.all([msg.channel.sendMessage('Your post is on its way!'), req])

  const post = randomInArray(res.data.data.children).data
  const fixedUrl = fixURL(post.url)

  const embed = new Discord.RichEmbed()
    .setColor('#3676b3')
    .setTitle(post.title)
    .setAuthor(`/u/${post.author}`)
    .setFooter('Powered by /r/me_irl')
    .setImage(fixedUrl)
    .setURL(fixedUrl)

  notice.delete()
  msg.channel.sendEmbed(embed, { disableEveryone: true })
}

exports.help = '**Usage: `pls me_irl`**\nReturns a random image from the subreddit me_irl'
