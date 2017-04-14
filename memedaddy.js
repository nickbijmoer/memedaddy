const config = require('./config.json')
const Discord = require('discord.js')
const fs = require('fs')
const path = require('path')
const client = new Discord.Client()

client.login(config.token)

let commandsUsed = 0
let guildsJoined = 0
let guildsLeft = 0

const commandsPath = path.join(__dirname, './commands')

client.on('message', msg => {
  let prefix = msg.content.split(" ")[0]
  if(!config.prefix.includes(prefix))
    return
  if (msg.author.bot || !msg.content.startsWith(prefix + ' ')) {
    return
  }

  const command = msg.content.substring(prefix.length + 1).toLowerCase().split(" ")[0]
  const args = msg.content.split(' ').slice(2)

  if (command === 'eval') {
    const {
      username,
      discriminator,
      id
    } = msg.author
    const owner = client.users.get(config.owner)
    const script = args.join(' ')
    if (msg.author.id === config.owner) {
      try {
        const dank = eval(script) // eslint-disable-line no-eval
        msg.channel.sendCode('js', dank)
      } catch (e) {
        msg.channel.sendMessage(':warning: **ERROR** :warning: ```\n' + e + '\n```')
      }
    } else {
      msg.reply('you don\'t have permission to use this command.')
      owner.sendMessage(`**${username}#${discriminator} (${id}):**\nThis person was trying to use the eval command!\n${script}`)
    }
  } else if (command === 'report' && msg.author.id === config.owner) {
    function timeCon(time) {
      time = time * 1000
      let days = 0,
        hours = 0,
        minutes = 0,
        seconds = 0
      days = Math.floor(time / 86400000)
      time -= days * 86400000
      hours = Math.floor(time / 3600000)
      time -= hours * 3600000
      minutes = Math.floor(time / 60000)
      time -= minutes * 60000
      seconds = Math.floor(time / 1000)
      time -= seconds * 1000
      days = days > 9 ? days : "0" + days
      hours = hours > 9 ? hours : "0" + hours
      minutes = minutes > 9 ? minutes : "0" + minutes
      seconds = seconds > 9 ? seconds : "0" + seconds
      return (parseInt(days) > 0 ? days + ":" : "") + (parseInt(hours) === 0 && parseInt(days) === 0 ? "" : hours + ":") + minutes + ":" + seconds
    }
    let embed = new Discord.RichEmbed()
      .setColor("#357cee")
      .setTitle(`${client.user.username} ${config.version}`)
      .setFooter(commandsUsed + ' commands used this session.')
      .addField("Uptime", `${timeCon(process.uptime())}`, true)
      .addField("RAM Usage", `${((process.memoryUsage().heapUsed / 1024) / 1024).toFixed(2)} MB`, true)
      .addField("Websocket Ping", `${(client.ping).toFixed(0)} ms`, true)
      .addField("Node", `${process.version}`, true)
      .addField("Library", `[Discord.js](https://discord.js.org) v${Discord.version}`, true)
      .addField("System Info", `${process.platform} (${process.arch})`, true)
      .addField("Total Guilds", client.guilds.size, true)
      .addField('Text Channels', client.channels.size, true)
      .addField('Users', client.users.size, true)
      .addField('Guilds Joined this Session', guildsJoined, true)
      .addField('Guilds Left this Session', guildsLeft, true)
      .addField("Newest Guild", client.guilds.last().name)
    msg.channel.sendEmbed(embed)
  } else {
    fs.access(path.join(commandsPath, command + '.js'), fs.constants.R_OK, (err) => {
      if (err) {
        return
      }
      try {
        delete require.cache[require.resolve('./commands/' + command)]
        require('./commands/' + command).run(client, msg, args, config, Discord)
        const embed = new Discord.RichEmbed()
          .setAuthor(command)
          .setColor('#7d5bbe')
          .setDescription(msg.author.username + `#` + msg.author.discriminator + ` in ` + msg.guild)
        try {
          commandsUsed++
          client.guilds.get('281482896265707520').channels.get('297554251452776458').sendEmbed(embed, {
            disableEveryone: true
          })
        } catch (e) {
          console.log(e)
        }
      } catch (err) {
        console.error(err)
      }
    })
  }
})

client.on('guildCreate', guild => {
  guildsJoined++
  client.guilds.get(guild.id).fetchMembers()
    .then(x => {
      let c = (x.members.filter(guildMember => guildMember.user.bot).array().length)
      let d = guild.memberCount - c
      let percentage = Math.round((c / guild.memberCount) * 100)
      if (percentage > 50 && c > 10) {
        const embed = new Discord.RichEmbed()
          .setAuthor('🤖 Joined Bot Guild 🤖')
          .setColor('#00ff00')
          .setFooter(`Guild ID: ${guild.id}`)
          .setDescription(`Guild Name: ${guild.name}\nOwner: ${guild.owner}\nTotal Members: **${guild.memberCount}** | Humans: **${d}** | Bots: **${c}** | Percentage: **${percentage}** `)
        try {
          client.guilds.get('281482896265707520').channels.get('297554251452776458').sendEmbed(embed, {
            disableEveryone: true
          })
        } catch (e) {
          console.log(e)
        }
        guild.defaultChannel.sendMessage(`Thanks for trying to add ${client.user.username}, but our anti-bot guild protection system has flagged this server.\n\nIf you'd like to appeal that, either make sure you have more humans than bots, or less than 10 bots. At that time you can try to add me again. Goodbye!`)
          .then(() => {
            guild.leave()
          })
      } else {
        const embed = new Discord.RichEmbed()
          .setAuthor('Joined Guild')
          .setColor('#00ff00')
          .setFooter(`Guild ID: ${guild.id}`)
          .setDescription(`Guild Name: ${guild.name}\nOwner: ${guild.owner}\nTotal Members: **${guild.memberCount}** | Humans: **${d}** | Bots: **${c}** | Percentage: **${percentage}** `)
        try {
          client.guilds.get('281482896265707520').channels.get('297554251452776458').sendEmbed(embed, {
            disableEveryone: true
          })
        } catch (e) {
          console.log(e)
        }
        guild.defaultChannel.sendMessage(`Hello \`${guild.name}\`! My name is Dank Memer.\n\nTo see info about getting started, do \`pls help\`.\n\nMy owner's name is Melmsie#8769, and he adds new commands fairly often!\n\nIf you find a bug, or want to suggest a new command, do \`pls bug <message>\`\n\nHave a **dank** day!`)

      }
    })

})

client.on('guildDelete', guild => {
  guildsLeft++
  const embed = new Discord.RichEmbed()
    .setAuthor(`Left ${guild.name}`)
    .setColor('#ff0000')
    .setFooter(`Guild ID: ${guild.id}`)
  try {
    client.guilds.get('281482896265707520').channels.get('297554251452776458').sendEmbed(embed, {
      disableEveryone: true
    })
  } catch (e) {
    console.log(e)
  }
})

client.on('ready', () => {
  console.log(client.user.username + ' loaded successfully. 👌')
  client.user.setGame(`${config.prefix[0]} help | ${config.version}`, `https://www.twitch.tv/melmsiebot`)
})

process.on('unhandledRejection', err => {
  console.error('Uncaught Promise Error: \n' + err.stack)
  const embed = new Discord.RichEmbed()
    .setAuthor(`Error in ${client.guild.name}`)
    .setColor('#ff0000')
    .setDescription(err.stack)
    .setFooter(`Guild ID: ${client.guild.id}`)

  client.guilds.get('281482896265707520').channels.get('297554251452776458').sendEmbed(embed, {
    disableEveryone: true
  })
})
