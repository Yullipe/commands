exports.run = (clair, message, args) => {
	const fs = require("fs");
	let userData = JSON.parse(fs.readFileSync(`./storage/userdata.json`, "utf8"));
	let sender = userData[message.author.id];
	message.channel.send(message.author.username+ " **has** " + sender.coupons + " **Coupons**!");
	if (!userData[message.author.id]) {
		message.channel.send("**coupons**");
	}
}