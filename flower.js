exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	var fs = require('fs');
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	if (args[0] === "rose") {
	//Minus Coupons
	const y = -100;
	const cpns = userData[message.author.id].coupons;
	var minus = y + cpns;
	//Giving Flowers
	userData[message.mentions.users.first().id].intimatepoints += 10;
	const flcd = new Set();
	const rccd = new Set();
	const embed = new Discord.RichEmbed()
		.setColor(0xff2700)
		.setTitle(":heart: " + message.author.username)
		.addField("Gave " , message.mentions.users.first().username + " :rose: " + " gained **10** Intimate Points" , true)
		.addField(message.mentions.users.first().username, " has a total of " + `**${userData[message.mentions.users.first().id].intimatepoints}**` + " Intimate Points." , false);
	message.channel.send({embed});
	
	
	if (!(rccd.has(mentions.users.first().id))){
  		userData[mentions.users.first().id].intimatepoints += +10;
	}
	
	flcd.add(message.author.id);
  	setTimeout(() => {
	  	flcd.delete(message.author.id);
	}, 300000);

  	fs.writeFile("./storage/userdata.json", JSON.stringify(userData), (err) => {
  		if (err) console.log(err);
  	});
		return;
	
	} else
	if (args[0] === "help") {
		message.channel.send("The commands for c.flower are `rose` `whiteflower` `tulip` `sunflower` `sakura` `daisy` `hibiscus`.");
		return; 
	}
	message.channel.send("```Please type c.flower help```");

}