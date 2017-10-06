exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("https://ci.memecdn.com/6856256.gif")
	message.channel.send({embed});
}