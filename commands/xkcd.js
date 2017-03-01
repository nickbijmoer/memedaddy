const axios = require('axios')
const cheerio = require('cheerio')

const commonUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'

exports.run = function (client, msg, args, config, Discord) {
  axios(`https://duckduckgo.com/html/?q=${args}%20xkcd`, {
    headers: {
      'Accept-Language': 'en-US, en; q=0.8',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': commonUserAgent
    }
  })
    .then(({ data }) => {
      const $ = cheerio.load(data)
      let xkcdLink

      $('.result__a').each((i, link) => {
        const { href } = link.attribs

        if (href.search(/^https?:\/\/(www\.)?xkcd\.com\//) !== -1 && typeof xkcdLink === 'undefined') {
          xkcdLink = href
        }
      })

      return xkcdLink
    })
    .then(link => {
      if (typeof link === 'undefined') {
        return msg.reply('sorry, but I couldn\'t find that xkcd. Well, i\'m not THAT sorry...')
      }

      return axios(link)
        .then(({ data }) => {
          const $ = cheerio.load(data)

          const img = $('#comic').children().first()

          if (img.prop('tagName') === 'IMG') {
            const title = $('#ctitle').text()
            const subTitle = img.attr('title')
            const imgSource = 'https:' + img.attr('src')

            const embed = new Discord.RichEmbed()
              .setColor('#ffffff')
              .setTitle(title)
              .setDescription(subTitle)
              .setURL('https://xkcd.com/')
              .setImage(imgSource)

            return msg.channel.sendEmbed(embed, { disableEveryone: true })
          } else {
            return msg.reply('sorry, but i couldn\'t find that xkcd. Well, i\'m not THAT sorry...')
          }
        })
    })
    .catch(err => {
      console.error(err)

      msg.reply('there was a problem with this command, **please** send a bug report!')
    })
}

exports.help = '**Usage: `pls xkcd <comic title>`**\nWill return a comic from xkcd.'
