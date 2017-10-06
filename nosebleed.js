exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **nosebleeds!**")
		.setImage("https://media.giphy.com/media/pIWg12EJTXOWQ/giphy.gif")
	message.channel.send({embed});
}