exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	message.channel.send(message.author.username +" flipped heads!", {
		files: [`./img/Coins/heads.jpg`
		]
	});
	message.delete()
}