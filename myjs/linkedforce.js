exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	
	//Linked Force to Arcane Magic
	if (args[0] === "1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water Link", false) 
	message.channel.send({embed});
		return;
	} else 
		
	if (args[0] === "2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water + Wind Link", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water + Wind + Earth Link", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water + Wind + Earth + Lightning Link", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "5") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water + Wind + Earth + Lightning + Dark Link", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "6") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "Fire + Water + Wind + Earth + Lightning + Dark + Light Link", false) 
		.addField("Castable: ", "Arcane Magic", false)
	message.channel.send({embed});
		return;
	} else 
	//Fire Link Burst	
	if (args[0] === "F1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:fire: Fire  Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "F2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:fire: Fire Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "F3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:fire: Fire Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "F4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:fire: Fire Links", false) 
		.addField("Castable: ", "Linked Burst [ Fire ] " , false)
	message.channel.send({embed});
		return;
	} else 
	//Water Link Burst
	if (args[0] === "Wa1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:sweat_drops: Water Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Wa2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:sweat_drops: Water Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Wa3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:sweat_drops: Water Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Wa4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:sweat_drops: Water Links", false) 
		.addField("Castable: ", "Linked Burst [ Water ] ", false)
	message.channel.send({embed});
		return;
	} else
	//Ice Link Burst
	if (args[0] === "I1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:snowflake: Ice Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "I2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:snowflake: Ice Links", false) 
	message.channel.send({embed});
		return;
	} else
	if (args[0] === "I3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:snowflake: Ice Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "I4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:snowflake: Ice Links", false) 
		.addField("Castable", "Linked Burst [ Ice ]" , false)
	message.channel.send({embed});
		return;
	} else 
	//Nature Link Burst
	if (args[0] === "N1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:leaves: Nature Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "N2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:leaves: Nature Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "N3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:leaves: Nature Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "N4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:leaves: Nature Links", false) 
		.addField("Castable: " , "Linked Burst [ Nature ] ", false)
	message.channel.send({embed});
		return;
	} else 
	//Wind Linked Burst
		if (args[0] === "Wi1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:cloud_tornado: Wind Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "Wi2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:cloud_tornado: Wind Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "Wi3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:cloud_tornado: Wind Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "Wi4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:cloud_tornado: Wind Links", false) 
		.addField("Castable: ", "Linked Burst [ Wind ]", false)
	message.channel.send({embed});
		return;
	} else 
	//Earth Linked Burst
		if (args[0] === "E1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:mountain: Earth Links", false) 
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "E2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:mountain: Earth Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "E3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:mountain: Earth Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "E4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:mountain: Earth Links", false) 
		.addField("Castable: ", "Linked Burst [ Earth ]" , false)
	message.channel.send({embed});
		return;
	} else
	//Lightning Linked Burst
	if (args[0] === "L1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:zap: Lightning Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "L2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:zap: Lightning Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "L3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:zap: Lightning Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "L4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:zap: Lightning Links", false) 
		.addField("Castable: ", "Linked Burst [ Lightning ]", false)
	message.channel.send({embed});
		return;
	} else 
	//Dark Linked Burst
		if (args[0] === "D1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:eight_pointed_black_star: Dark Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "D2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:eight_pointed_black_star: Dark Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "D3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:eight_pointed_black_star: Dark Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "D4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:eight_pointed_black_star: Dark Links", false) 
		.addField("Castable: ", "Linked Burst [ Dark ]", false)
	message.channel.send({embed});
		return;
	} else 
	//Holy Linked Burst
		if (args[0] === "H1") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**2**:sunny: Holy Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "H2") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**3**:sunny: Holy Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "H3") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**4**:sunny: Holy Links", false) 
	message.channel.send({embed});
		return;
	} else 
		if (args[0] === "H4") {
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Channels", "**5**:sunny: Holy Links", false) 
		.addField("Castable: ", "Linked Burst [ Holy ]", false)
	message.channel.send({embed});
		return;
	}
		const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.addField("Linked Force: ", "[`1` , `2` , `3` , `4` , `5` , `6`]", false) 
		.addField("Linked Burst: ", "[`F`,`Wa`,`Wi`,`I`,`N`,`E`,`L`,`D`,`H`]", false)
	message.channel.send({embed});
}