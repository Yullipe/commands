exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	if (message.author.id === "226523866825097216") return;
	if (message.author.id === "348533726495506434") return;
	if (message.author.id === "354919646253547523") return;
	
	if (args[0] === "tan" ) {
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(10,message.content.length);
	
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
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username + " **[Tank]**")
		.addField(":crossed_swords: Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*3)+1) , false)
	message.channel.send({embed});
		return;
	} else	
	if (args[0] === "def" ) {
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(10,message.content.length);
	
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
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username + " **[Defense]**")
		.addField(":crossed_swords: Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*3)+3) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "sup" ) {
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }

	var textOutput = message.content.substring(10,message.content.length);
	
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
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username + " **[Support]**")
		.addField(":crossed_swords: Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*2)+4) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "spe" ) {
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(10,message.content.length);
	
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
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username + " **[Specialist]**")
		.addField(":crossed_swords: Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*3)+5) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "off" ) {
	const rarity = [6,2];
	const cast = ["Normal",":boom: Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }

	var textOutput = message.content.substring(10,message.content.length);	
	
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
		.setColor(0xffffff)
		.setThumbnail(message.author.avatarURL)
		.setTitle(message.author.username + " **[Offense]**")
		.addField(":crossed_swords: Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*4)+6) , false)
	message.channel.send({embed});
		return;
	}
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.addField("c.cast [role]", "`off` , `def` , `tan` , `spe` , `sup` ", false)
		.addField("Offense" , " c.cast off" , false)
		.addField("Defense" , " c.cast def" , false)
		.addField("Tank" , " c.cast tan" , false )
		.addField("Specialist" , " c.cast spe" , false)
		.addField("Support" , " c.cast sup ", false)
	message.channel.send({embed});
}