exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("http://i.imgur.com/e0rv3x7.png")
	message.channel.send({embed});
}