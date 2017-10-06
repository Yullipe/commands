exports.run = (clair, message, args) => {
	const fs = require("fs");
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	let sender = userData[message.author.id];
	if (message.channel.id = "226523866825097216"); {
		userData[mentions].coupons + = Math.floor((Math.random()*1)+10)
		message.channel.send("**coupons**");
	}
}