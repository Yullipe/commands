exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const fs = require("fs");
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setImage("https://68.media.tumblr.com/f3c3a10d691da2aede46bbf49b376ac0/tumblr_opighmTEbe1u3mdvio1_540.gif")
	message.channel.send({embed});
}