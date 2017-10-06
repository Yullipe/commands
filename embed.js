exports.run = (clair, message, args) => {
	if (message.content.length < 8) {
		message.delete();
		message.channel.send(":whale2: Must contain 8 letters or more")
		return;
	}
	var textOutput = message.content.substring(8,message.content.length);
	const Discord = require('discord.js');
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.addField(":whale2:: ", textOutput);
	message.channel.send({embed});
	message.delete();
}