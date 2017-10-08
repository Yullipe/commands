exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	message.channel.send("**Triggered**", {
		files: [`/img/krintriggered.gif`
		]
	});
}
