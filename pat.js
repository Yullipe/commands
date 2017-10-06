exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (args.length === 0) {
     const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("**Clair pats** " + message.author.username)
		.setImage("http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-23.gif")
	message.channel.send({embed});
}
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **pats **"+ message.mentions.users.first().username)
		.setImage("http://gifimage.net/wp-content/uploads/2017/07/head-pat-gif-23.gif")
	message.channel.send({embed});
}