exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const rarity = [1,14,40,75];
	var output = [0,0,0,0];
	const type = ["rare :blowfish:", "uncommon :tropical_fish:", "common :fish:", "trash :wastebasket:"];

	if (args.length > 0) {
		if (args[0] === "net") {
			for (var i=0; i<10; i++){
				generateFish();
			}
			displayOutput("net");
			return;
		}
		if (args[0] === "pole") {
			generateFish();
			return;
		}
	}
	generateFish();
	displayOutput("pole");

	function generateFish() {
		var range = 0;
		for (var i=0; i<rarity.length; i++) {
			range += rarity[i];
		}

		var rng = Math.random()*range;
		console.log("RNG: " + rng);
		var top = 0;

		for (var i=0; i<rarity.length; i++) {
			top += rarity[i];
			if (rng<top) {
				output[i]++;
				return;
			}
		}
	}

	function displayOutput(met) {
		if (met === "pole") {
			for (var i=0; i<output.length; i++) {
				if (output[i]>0) {
					const embed = new Discord.RichEmbed()
						.setColor(0x0f0f0f)
						.addField(message.author.username, ":fishing_pole_and_fish: | caught " + type[i])
					message.channel.send({embed});
					return;
				}
			}
		}
		if (met === "net") {
			var txt = ":fishing_pole_and_fish: | caught ";
			for (var i = 0; i<output.length; i++) {
				txt += "[" + output[i] + " " + type[i] + "] ";
			};
			const embed = new Discord.RichEmbed()
				.setColor(0x0f0f0f)
				.addField(message.author.username, txt, true) 
			message.channel.send({embed});
		}
	}
}