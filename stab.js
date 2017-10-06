exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (args.length === 0) {
    const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("**Clair stabs** " + message.author.username)
		.setImage("http://i0.kym-cdn.com/photos/images/original/000/984/948/ac7.gif")
	message.channel.send({embed});
}
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **stabs **"+ message.mentions.users.first().username)
		.setImage("http://i0.kym-cdn.com/photos/images/original/000/984/948/ac7.gif")
	message.channel.send({embed});
}