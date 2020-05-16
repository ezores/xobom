const Discord = require('discord.js');


exports.run = function(client, message) {
const embed = new Discord.RichEmbed()
.setColor('#8A2BE2')
.setTitle('♬ » Müzik Komutları « ♬')
.setTimestamp()
.addField('» -Film- Aradığınız Filmle İlgili Bilgi Verir', '.film')
.addField('» -Play- Müzik Açar', '.play ')
.addField('» -Queue- Şarkı Kuyruğunu Gösterir', '.queue')
.addField('» -Start- Şarkıya Devam Eder', '.start')
.addField('» -Stop- Şarkıyı Durdurur', '.stop')
.addField('» -Leave- Şarkıyı Kapatır', '.leave')
.addField('» -Volume- Müziğe Ses Ve Bass Eklersiniz', '.vol 1-100')
.addField('» -Song- Çalan Şarkının Bilgisini Verir', '.song')
.addField('» -Skip- Şarkıyı Geçersiniz', '.skip')
.setFooter('BoomBox', client.user.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['y','yardim','help','muzik','komutlar'], 
  permLevel: 0 
};

exports.help = {
  name: 'müzik',
  description: 'Tüm komutları gösterir.',
  usage: 'müzik'
};