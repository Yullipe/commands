exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **flexes**")
		.setImage("http://i0.kym-cdn.com/photos/images/original/001/200/685/a99.gif")
	message.channel.send({embed});
}