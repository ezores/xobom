let Discord = require("discord.js");

exports.run = async function(client, message, args) {
    if(!args[0]) return message.channel.send("Film ismi giriniz [.film 'film adı'] :projector:")
    require("request")("http://acars-site.glitch.me/api/film?ara=" + encodeURI(args.join(" ")), async function(err, resp, body) {
        if(JSON.parse(body).hata) return message.channel.send("Aradığınız film bulunamadı :x:")
        let embed = new Discord.RichEmbed()
            .setColor('#8A2BE2')
            .setAuthor(JSON.parse(body).name, undefined, JSON.parse(body).link)
            .addField("Yönetmen", JSON.parse(body).director ? "[" + JSON.parse(body).director.name + "](" + JSON.parse(body).director.link + ")" : "Belirtilmemiş")
            .addField("Yayın tarihi", JSON.parse(body).publishedDate.string)
            .addField("IMDb", JSON.parse(body).imdbScore ? (JSON.parse(body).imdbScore + " **|** " + JSON.parse(body).imdbRatingCount.toLocaleString() + " kişi oy kullanmış") : "Oylama yapılmamış")
            .addField("Uzunluk", JSON.parse(body).time.string)
            .addField("Kategoriler", JSON.parse(body).categories.join(", "))
        message.channel.send(embed)
    })
}

exports.conf = {
  enabled: true,
  guildOnly: true, 
  aliases: ['film'], 
  permLevel: 0 
};

exports.help = {
    name: "film",
    description: "Film ararsınız.",
    usage: "film [film adı]"
}
