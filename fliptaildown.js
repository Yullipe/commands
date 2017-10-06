exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	message.channel.send(message.author.username + " flipped tails!", {
		files: [`./img/Coins/tails.jpg`
		]
	});
	message.delete()
} 