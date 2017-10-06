exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");

	if (args[0] === "Fire") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":fire: Fire Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Additional +1 attack next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Fire Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Water") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":sweat_drops: Water Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Boosts healing by 25% next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Water Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Nature") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":leaves: Nature Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Boosts healing by 25% next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Nature Stack", false)
	message.channel.send({embed});
		return;	
	} else 
	if (args[0] === "Wind") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":cloud_tornado: Wind Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Additional +1 dodge next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Wind Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Earth") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":mountain: Earth Burst to" + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Additional +1 defend next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Earth Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Ice") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":snowflake: Ice Burst to" + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Additional +1 defend next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Ice Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Lightning") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":zap: Lightning Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "Rolls 6-8 will be crit next turn" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Lightning Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Dark") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":eight_pointed_black_star: Dark Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "adds -1 Defend/Dodge to enemy for 2 turns" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Dark Stack", false)
	message.channel.send({embed});
		return;
	} else 
	if (args[0] === "Holy") {
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":sunny: Holy Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "adds -1 attack to enemy for 2 turns" , false)
		.addField("Rate of Hit", ":game_die: "+ Math.ceil(rng) , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Orb Stacks", "Adds 1 Holy Stack", false)
	message.channel.send({embed});
		return;	
	} else 
	if (args[0] === "Arcane") {
	const rarity = [6,2];
	const cast = ["Normal","Normal"];
	
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
		.setColor(0xffffff)
		.setTitle(message.author.username)
		.addField("Attack: ", ":dizzy: Arcane Burst to " + message.mentions.users.first().username, true)
		.addField("Element Effect: ", "minus to enemy -20HP damage strike" , false)
		.addField("Rate of Hit", ":game_die: "+ "**8**"  , false)
		.addField("Your attack is: " , cast[generateHit()] , false)
		.addField("Damage if hit: ", Math.floor((Math.random()*5)+5) , false)
		.addField("Additional Effect: ", "Additional +1 attack next turn, Boosts healing by 25%, +1 to dodges, +1 to defends , instead of 7-8 crit it will be 6-8, adds debuff of -1 defend to enemy for 2 turns, adds debuff of -1 attack to enemy for 2 turns" , true)
		.addField("Orb Stacks", "Adds 1 Arcane Stack", false)
	message.channel.send({embed});
		return;
	}
	message.channel.send("**Magical Burst of Clair**: Fire, Water, Nature, Wind, Earth, Ice, Lightning, Dark, Holy, Arcane");
}