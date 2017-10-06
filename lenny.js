exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(" **( ͡° ͜ʖ ͡°)**" + message.mentions.users.first().username)
	message.channel.send({embed});
	message.delete();
}