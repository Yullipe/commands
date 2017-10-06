exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	const cast = ["**Con x Nep**","**Kyro x Krin**","**Sliggo x Clair**","**Vert x Sarc**","**Virt x Naru**","**Shadow x Blanc**","**Gaizer x Noire**","**Histy x Dogoo**","**Iffy x Kuro**","**Shadow x Ramen**","**Krin x Tea**","**Ivan x Compa**","**Theory x Theory**","**Tsuhimi <--- just a random stalker**","**Katyusha x Vodka**","**Gremgear x Cake**","**Sarc's Credit card x Leanbox's debt**","**Don Ramen x Shadow**","**Greeze x Erie**","**Yullipe <--- where my ramen at?!**","**Rom <--- Coma?!**","**Ram <--- Where are you?!**","**Mina x Fish**","**Chika x Vert**"];
	const rng = Math.round(Math.random()*cast.length);
	
	const embed = new Discord.RichEmbed()
		.setColor(0x0f0f0f)
		.addField(message.author.username, cast[rng], true)
		message.channel.send({embed});
		
}
	