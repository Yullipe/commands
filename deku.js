exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("https://media.tenor.com/images/2a0d391675b0bc03400d79b5a6a21137/tenor.gif")
	message.channel.send({embed});
}