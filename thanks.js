exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **is thankful**")
		.setImage("https://media.giphy.com/media/ehfWmij1MrqjS/giphy.gif")
	message.channel.send({embed});
}