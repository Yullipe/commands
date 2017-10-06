exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (args.length === 0) {
        const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("**Clair glares at** " + message.author.username)
		.setImage("https://media.tenor.com/images/f6a40a1c35ce669933d1d141d514b797/tenor.gif")
	message.channel.send({embed});
}
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **glares at **"+ message.mentions.users.first().username)
		.setImage("https://media.tenor.com/images/f6a40a1c35ce669933d1d141d514b797/tenor.gif")
	message.channel.send({embed});
}