exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	
	if(args[0] === "Arcane"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":dizzy: Arcane Cosmic Burst to All" , false)
		.addField("Rate of Hit", ":game_die: **20**", false)
		.addField("Effect: ", "Everyone is obliterated and cannot battle anymore", false)
		.addField("Stacks: ", "Uses all 5 Arcane orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Fire"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":fire: Fire Cosmic Burst Buff" , false)
		.addField("Effect: ", "Doubles Clair's Damage for 2 turns", false)
		.addField("Stacks: ", "Uses all 5 Fire orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Water"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":sweat_drops: Water Cosmic Burst Buff to All Allies" , false)
		.addField("Effect: ", "All allies negate magic damage for 2 turns", false)
		.addField("Stacks: ", "Uses all 5 Water orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Nature"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":leaves: Nature Cosmic Burst Cleanse" , false)
		.addField("Effect: ", "Removes all status", false)
		.addField("Stacks: ", "Uses all 5 Nature orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Wind"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":cloud_tornado: Wind Cosmic Burst Buff" , false)
		.addField("Effect: ", "Clair dodges everything for 2 turns", false)
		.addField("Stacks: ", "Uses all 5 Wind orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Earth"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":mountain: Earth Cosmic Burst Buff to All Allies" , false)
		.addField("Effect: ", "All allies negate physical damage for 2 turns", false)
		.addField("Stacks: ", "Uses all 5 Earth orb stacks", false)
	message.channel.send({embed});
		return;
	} else	
	if(args[0] === "Ice"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":snowflake: Ice Cosmic Burst Debuff" , false)
		.addField("Effect: ", "Reduces all enemies' dodge by -3 except for flying units for 4 turns", false)
		.addField("Stacks: ", "Uses all 5 Ice orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Lightning"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":zap: Lightning Cosmic Burst Buff" , false)
		.addField("Effect: ", "Clair's attack will always hit critical strike for 2 turns", false)
		.addField("Stacks: ", "Uses all 5 Lightning orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Dark"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":eight_pointed_black_star: Dark Cosmic Burst Debuff to All" , false)
		.addField("Effect: ", "All allies and enemies will have -3 damage and -3 defend except Clair for 3 turns", false)
		.addField("Stacks: ", "Uses all 5 Dark orb stacks", false)
	message.channel.send({embed});
		return;
	} else
	if(args[0] === "Holy"){
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":sunny: Holy Cosmic Burst Debuff to All" , false)
		.addField("Effect: ", "All allies and enemies will have -2 accuracy for except Clair 4 turns", false)
		.addField("Stacks: ", "Uses all 5 Holy orb stacks", false)
	message.channel.send({embed});
		return;
	}
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Use:","c.cosmicburst [element]", false) 
		.addField("Element: ","[Fire,Water,Nature,Wind,Earth,Ice,Lightning,Dark,Holy", false)
	message.channel.send({embed});
}	