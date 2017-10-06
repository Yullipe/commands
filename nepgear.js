exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("https://i.pinimg.com/originals/0a/53/be/0a53be32a0a7993d2831d2ef3ebf60cf.gif")
	message.channel.send({embed});
}