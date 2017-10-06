exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **is interested**")
		.setImage("https://media.giphy.com/media/a23oYmHwhTeUw/giphy.gif")
	message.channel.send({embed});
}