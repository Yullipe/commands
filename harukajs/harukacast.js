exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	//Attack Strength
	const rarity = [ 1,1,1,1,1,1,1,1,1,1,1,1,1 ];
	const cast = ["Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Hit Check","Critical Hit Check ","Critical Hit Check","Critical Hit Check"];
	
	//Random Card
	const haruka = ["Two ","Three ","Four ","Five ","Six ","Seven ","Eight ","Nine ","Ten ","Jack ","Queen ","King ","Ace "];
	const face = ["Clovers","Clovers","Clovers","Spades","Spades","Spades","Spades","Hearts","Hearts","Hearts","Diamonds","Diamonds","Diamonds"];

	//Dice roll
	const roll = [ "**1**","**2**","**2**","**3**","**3**","**4**","**4**","**5**","**5**","**6**","**7**","**7**","**8**" ]
	
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
		.setTitle("**Haruka Factor**")
		.addField("Draws ", haruka[generateHit()] + "of " + face[generateHit()] , false)
		.addField("Attack: ", "Sacrament of Astral Prominence to " + message.mentions.users.first().username , true)
		.addField("Rate of Hit",":game_die: " + roll[generateHit()], false)
		.addField("Your attack is: ", cast[generateHit()], false)
		.addField("Damage if hit", Math.floor((Math.random()*7)+1), true)
	message.channel.send({embed});
}