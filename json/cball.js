exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	const rarity = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
	const cast = ["It is certain","It is decidedly so","Neptune says yes!", "Yes Definitely","You may rely on it","As I see it, Yes","Most Likely","Outlook good","Yes","Sign point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","Outlook not so good","Very doubtful","Can you repeat the question","That is a lie","Thats a big yes for me","A hundred percent yes","Sorry but no" , "It is like saying humans can fly", "Maybe you need more points to get a yes", "Nepgear says its a no!", "Nepgear says yes!", "Rom and Ram does not agree to it", "Neptune did not understand please try again", "As much as I want Vert's mune, Yes", "Histoire was sealed, maybe your question should too","It is like Seahorse Krin, you do not know what kind of gender", "Noire agrees to it" ];

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
		.setColor(0x0f0f0f)
		.addField(message.author.username, cast[generateHit()], true)
	message.channel.send({embed});

}