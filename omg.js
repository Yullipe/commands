exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("https://media.giphy.com/media/X2FDYSjwvJyWA/giphy.gif")
	message.channel.send({embed});
}