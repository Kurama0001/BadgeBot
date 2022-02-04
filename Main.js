const Role = require('./Role.json');
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });

client.login("TOKEN");

client.on('ready', () => {
  console.log(`${client.user.tag} en ligne!`)
})

client.on("guildMemberAdd", async (member) => {
  const badges = member.user.flags.toArray()
  if(badges.length === 0) return;
  else {
    badges.map(async (badge) => {
      if(Role[badge] === "") return;
      if(!member.guild.roles.cache.get(Role[badge])) return;
      else {
        member.roles.add(Role[badge])
      }
    })
  }
})