exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **pouts**")
		.setImage("http://i.imgur.com/A3vDoIJ.gif")
	message.channel.send({embed});
}