const express = require("express");
const app = express();

app.listen(() => console.log("jano"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js'); 
const jano = new Discord.Client(); 
const { Canvas } = require('canvas-constructor');
const { get }  = require('node-superfetch');
const ytdl = require("ytdl-core");


jano.on("message", message => {
if (message.content === "help") {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(` 
زانیاری دەربارەی بۆتەکە

ئایدی چەناڵ دا ئەنێی

لینک  ئەهێنی هەتا بەخێرهاتنی نەفەر بکات 

Tb/ ئەبێ لینکەکە لە یوتیوب بێت ئەگەر نا نابێت
[\`my youtube\`](https://youtube.com/channel/UCJhji5FByFiEMTzlskppJWg) • [\`Support\`](https://discord.gg/9n6dj99ZEN)
 `)
    
    .setFooter(` welcome vc ✨ | Coded by , JANO`, jano.user.avatarURL)
    .setURL("https://discord.gg/9n6dj99ZEN")
      
    message.channel.send(embed);
  }
});







jano.on("ready", async () => {
  console.log(`${jano.user.username} Ready .`);
  console.log(`${jano.guilds.cache.size} Servers .`);
  console.log(`${jano.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users .`);
 jano.user.setStatus("invisible")
  jano.user.setActivity("help | welcome vc", {
    type: "PLAYING"
  });
});


jano.on("voiceStateUpdate", async(voiceOld, voiceNew) => {
  const c = "887544153511194664"
const cc = jano.channels.cache.get(c)
  if (
    voiceNew.channelID == cc
  ) {

const connection = await cc.join();
    connection.play(ytdl("https://youtu.be/yRXDQE-aBII", {
        audioonly: true
      })
);


  } else if (voiceNew.channelID !== cc) {
    cc.leave();
}

})










jano.login("ODY3MjA4Mzg2NjEzMzQ2MzE0.YPdwvw.CPTImvJXTSG1GdEfEtnJDhq5D58");
