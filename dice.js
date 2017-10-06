exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (message.author.id === "226523866825097216") return;
	if (message.author.id === "348533726495506434") return;
	
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.addField(message.author.username, ":game_die: rolled " + Math.floor((Math.random()*5)+1), false)
	message.channel.send({embed});
}