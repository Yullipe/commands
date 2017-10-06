exports.run = (clair, message, args) => {
	const Discord = require('discord.js');
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }

    var rng = Math.random()*range;

    function generateHit() {
        console.log("Rate: " + rng);
        var top = 0;

        for (var i=0; i<rarity.length; i++) {
            top += rarity[i];
            if (rng<top) {
                return i;
            }
        }
    }
	
	const embed = new Discord.RichEmbed()
		.setColor(0x32CD32)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username)
		.addField("Block Rate: " + message.mentions.users.first().username, ":game_die: " + Math.ceil(rng) , false)
		.addField("Your Block is: ", cast[generateHit()] , false)
		.addField("Damage Reduction: ", ":game_die: "+ Math.floor((Math.random()*6)+1) , false)
	message.channel.send({embed});
}