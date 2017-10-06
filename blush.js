exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **blushes**")
		.setImage("http://gifimage.net/wp-content/uploads/2017/07/blush-anime-gif-9.gif")
	message.channel.send({embed});
}