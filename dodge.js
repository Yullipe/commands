exports.run = (clair, message, args) => {
	if (message.author.id === "226523866825097216") return;
	if (message.author.id === "348533726495506434") return;
	if (message.author.id === "354919646253547523") return;
	
	if (message.content.length < 7) {
		message.delete();
		message.channel.send(":whale2:: c.dodge")
		return;
	}
	
	var textOutput = message.content.substring(7,message.content.length);
	const Discord = require('discord.js');
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.addField( "Dodge: ", message.author.username, true)
		.addField("Rolled", ":game_die: "+ Math.floor((Math.random()*7)+1) , false)
		.addField("Note:", "if dodge fails take 2x damage", false)
	message.channel.send({embed});
	message.delete();
}
