exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	
	var textOutput = message.content.substring(7,message.content.length);
	
	
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username)
		.addField("Buff: ", textOutput, false)
	message.channel.send({embed});
	
}