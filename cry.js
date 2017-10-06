exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **cries**")
		.setImage("https://68.media.tumblr.com/e9fb46144efc579746e57bcaebd3350a/tumblr_olrmy4djBG1tydz8to1_500.gif")
	message.channel.send({embed});
}