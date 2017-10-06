exports.run = (clair, message, args) => {
	if (message.content.length < 7) {
		message.delete();
		message.channel.send(":whale2:: c.dodge me")
		return;
	}
	
	var textOutput = message.content.substring(7,message.content.length);
	const Discord = require('discord.js');
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.addField( "Dodge: ", message.author.username, true)
		.addField("Rolled", ":game_die: "+ Math.floor((Math.random()*4)+4) , false)
	message.channel.send({embed});
	message.delete();
}