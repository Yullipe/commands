exports.run = (clair, message, args) => {
	const Discord = require('discord.js');
	var fs = require("fs");
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	const dailies = new Set ();
	if (!(dailies.has(message.author.id))){
  		userData[message.author.id].coupons += Math.floor((Math.random() *1)+100);
		message.channel.send(message.author.username + " gained 100 :tickets:");
  	}
  	dailies.add(message.author.id);
  	setTimeout(() => {
	  	dailies.delete(message.author.id);
	}, 86400000);
	
}