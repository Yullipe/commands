exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.addField(message.author.username, ":game_die: rolled " + Math.floor((Math.random()*3)+3), false)
	message.channel.send({embed});
}