exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("http://i0.kym-cdn.com/photos/images/newsfeed/001/155/376/a67.gif")
	message.channel.send({embed});
}