exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	//Heads or Tails
	const rarity = [ 1,1 ];
	const cast = ["**Heads**","**Tails**"];
	
	//Photos
	const photos = [`./img/Coins/heads.jpg`,`./img/Coins/tails.jpg`];
	
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

	message.channel.send(message.author.username + " flips " + cast[generateHit()], {
	files: [
		photos[generateHit()]
		]
	});

}
