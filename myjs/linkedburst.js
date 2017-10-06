exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	
	//Linked Burst
	if (args[0] === "Fire") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :fire: **Fire** ]", false) 
		.addField("Effect: ","All enemies are burned for 10 turns", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Water") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :sweat_drops: **Water** ]", false) 
		.addField("Effect: ","All allies are healed for 50% of their max HP", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Nature") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :leaves: **Nature** ]", false) 
		.addField("Effect: ","Revives " + message.mentions.users.first().username, false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Wind") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :cloud_tornado: **Wind** ]", false) 
		.addField("Effect: ","Doubles Team's Dodge rolls for 3 turns", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Earth") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :mountain: **Earth** ]", false) 
		.addField("Effect: ","Doubles Team's Defend rolls for 3 turns", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Ice") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :snowflake: **Ice** ]", false) 
		.addField("Effect: ","Freezes all enemies making them unable to move for 3 turns unless hit", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Lightning") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :zap: **Lightning** ]", false) 
		.addField("Effect: ","Doubles Critical Damage for 2 turns [ x4 DMG when rolls a critical check ]", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Dark") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :eight_pointed_black_star: **Dark** ]", false) 
		.addField("Effect: ","Deals 10% of Max HP of the enemy for 5 turns", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Holy") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Casts: ","Linked Burst [ :sunny: **Holy** ]", false) 
		.addField("Effect: ","All enemies are blinded [All hit rates = 1 ]", false)
	message.channel.send({embed});
		return;
	} 
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Use:","c.linkedforce [element]", false) 
		.addField("Element: ","[Fire,Water,Nature,Wind,Earth,Ice,Lightning,Dark,Holy", false)
	message.channel.send({embed});
}
	