exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const fs = require("fs");
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle("Clair Bot c.help")
		.addField("**RP Commands**", "`cast` " + "`defend ` " + "`dodge` " + "`ship`", false)
		.addField("**Social Commands**" , "`blush` " + "`cry` " + "`flex` " + "`mugi` " + "`nosebleed` " + "`omg` " + "`pout` " + "`smug` " + "`thanks` " + "`welcome` " + "`poke` " + "`glare` " + "`punch` " + "`slap` " + "`pat` " + "`hug`", false)
		.addField("**Entertainment Commands**" , "`deku` " + "`kizunaai` " + "`nepgear` " + "`nerf` " + "`nepg` " + "`papi` ", false)
		.addField("**Games**" , "`dice` " + "`cball`", false)
		.addField("**Chika Dungeon Commands**", "`bossmonsters` " + "`dungeon` " + "`shop` " + "`profile`", false)
		.addField("**Currency**", "`coupon` " + "`intpts` " + "`exp` " , false)
		.addField("**Help**", "`help` " + "`prefix` ", false)
		.addField("**Others**", "`embed` " + "`lewd` " + "`lenny` ", false)
	message.channel.send({embed});
}