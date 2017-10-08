exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const photos = [`./img/trigger/1.gif`,`./img/trigger/2.gif`,`./img/trigger/3.gif`,`./img/trigger/4.gif`,`./img/trigger/5.gif`,`./img/trigger/6.gif`,`./img/trigger/7.gif`,`./img/trigger/8.gif`, ];
	const rng = Math.round(Math.random()*photos.length);
	
	message.channel.send("**Triggered**", {
		files: [
		photos[rng]
		]
	});
}
