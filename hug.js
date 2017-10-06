exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	if (args.length === 0) {
    const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle("**Clair hugs** " + message.author.username)
		.setImage("https://media.giphy.com/media/l3V0sbjHsGGEFytr2/giphy.gif")
	message.channel.send({embed});
}
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setTitle(message.author.username+ " **hugs **"+ message.mentions.users.first().username)
		.setImage("https://media.giphy.com/media/l3V0sbjHsGGEFytr2/giphy.gif")
	message.channel.send({embed});
}