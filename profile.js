exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	var fs = require('fs');
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	//level design 
	//Level = Math.max( Math.floor( constA * Math.log( XP + constC ) + constB ), 1 )
	const constA = 30;
	const constB = -200;
	const constC = 130;
	var xp = userData[message.author.id].exp;
	var level = Math.min(Math.max(Math.floor(constA*Math.log(xp +constC )+constB ),1),999);
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username+"'s Profile")
		.addField(`:up: Level: ${level}/999`, "You have earned " + `**${xp}** ` + " reputation" , true)
		.addField(":tickets:  Coupons: ","You have " + `**${userData[message.author.id].coupons}**` + " coupons",  true)
		.addField(":heart:  Intimate Points: ", "You have " + `**${userData[message.author.id].intimatepoints}**` + " Intimate Points", false)
		.addField(":crossed_swords: Duels (Win/Lose): ", "0W/0L", true)
		.addField(":man_in_tuxedo: Spouse :bride_with_veil: ", "Married to: ?", true);
	message.channel.send({embed});
}