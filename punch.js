exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (args.length === 0) {
    const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("**Clair punches** " + message.author.username)
		.setImage("https://gifimage.net/wp-content/uploads/2017/08/one-punch-man-anime-gif-1.gif")
	message.channel.send({embed});
}
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **punches **"+ message.mentions.users.first().username)
		.setImage("https://gifimage.net/wp-content/uploads/2017/08/one-punch-man-anime-gif-1.gif")
	message.channel.send({embed});
}