exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	const flip = ["headstop","taildown","headstop","taildown","headstop","taildown","headstop","taildown","headstop","taildown"];
	const rng = Math.round(Math.random()*flip.length);
	
	message.channel.send("c.flip" + flip[rng]);
}