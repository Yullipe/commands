exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("( ͡° ͜ʖ ͡°)")
		.setImage("http://i.imgur.com/ECsf5r3.gif")
	message.channel.send({embed});
}