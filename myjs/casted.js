exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	
	if (args[0] === "tank" ) {
	const rarity = [6,2];
	const cast = ["Normal","Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(7,message.content.length);
	
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
		.setTitle(message.author.username)
		.addField("Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*3)+1) , false)
	message.channel.send({embed});
		return;
	} else	
	if (args[0] === "def" ) {
	const rarity = [6,2];
	const cast = ["Normal","Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(7,message.content.length);
	
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
		.setTitle(message.author.username)
		.addField("Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+1) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "supp" ) {
	const rarity = [6,2];
	const cast = ["Normal","Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }

	var textOutput = message.content.substring(7,message.content.length);
	
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
		.setTitle(message.author.username)
		.addField("Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+1) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "spec" ) {
	const rarity = [6,2];
	const cast = ["Normal","Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }
	
	var textOutput = message.content.substring(7,message.content.length);
	
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
		.setTitle(message.author.username)
		.addField("Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*7)+1) , false)
	message.channel.send({embed});
		return;
	} else	
		
	if (args[0] === "off" ) {
	const rarity = [6,2];
	const cast = ["Normal","Critical"];
	
    var range = 0;
    for (var i=0; i<rarity.length; i++) {
        range += rarity[i];
    }

	var textOutput = message.content.substring(7,message.content.length);	
	
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
		.setTitle(message.author.username)
		.addField("Attack: ", textOutput, true)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*9)+1) , false)
	message.channel.send({embed});
		return;
	}
	const embed = new Discord.RichEmbed()
		.setColor(0xffffff)
		.addField(message.author.username, "**c.cast [`off` , `def` , `supp` , `spec` , `tank` ]**" , false)
	message.channel.send({embed});
}