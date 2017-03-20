exports.run = function (client, msg, args) {
  const targets = [ ]

  msg.mentions.users.array()
    .forEach(m => {
      targets.push(m.username)

      const idAsInContent = `<@!${m.id}>`

      if (args.includes(idAsInContent)) {
        args.splice(args.indexOf(idAsInContent), 1)
      }
    })

  args.forEach(m => targets.push(m))

  const query = encodeURI(targets.join(' and '))

  msg.channel.sendMessage(`<http://ripme.xyz/${query}>`)
}
