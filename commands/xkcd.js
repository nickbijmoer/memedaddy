const axios = require('axios')
const cheerio = require('cheerio')

const commonUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'

exports.run = async function (client, msg, args, config, Discord) {
  const { data: ddgData } = await axios(`https://duckduckgo.com/html/?q=${args}%20xkcd`, {
    headers: {
      'Accept-Language': 'en-US, en; q=0.8',
      'Upgrade-Insecure-Requests': 1,
      'User-Agent': commonUserAgent
    }
  })

  let $ = cheerio.load(ddgData)
  let xkcdLink

  $('.result__a').each((i, link) => {
    const { href } = link.attribs

    // TODO: check if there is a way to loop on there with a for loop
    if (href.search(/^https?:\/\/(www\.)?xkcd\.com\//) !== -1 && typeof xkcdLink === 'undefined') {
      xkcdLink = href
    }
  })

  if (typeof xkcdLink === 'undefined') {
    return msg.reply('sorry, but I couldn\'t find that xkcd. Well, i\'m not THAT sorry...')
  }

  const { data: xkcdData } = await axios(xkcdLink)

  $ = cheerio.load(xkcdData)

  const img = $('#comic').children().first()

  if (img.prop('tagName') === 'IMG') {
    const title = $('#ctitle').text()
    const subTitle = img.attr('title')
    const imgSource = 'https:' + img.attr('src')

    const embed = new Discord.RichEmbed()
      .setColor('#ffffff')
      .setTitle(title)
      .setDescription(subTitle)
      .setURL(xkcdLink)
      .setImage(imgSource)

    return msg.channel.sendEmbed(embed, { disableEveryone: true })
  } else {
    return msg.reply('sorry, but i couldn\'t find that xkcd. Well, i\'m not THAT sorry...')
  }
}

exports.help = '**Usage: `pls xkcd <comic title>`**\nWill return a comic from xkcd.'
