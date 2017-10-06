exports.run = (clair, message, args) => {
	const Discord = require("discord.js");
	const photos = [`./img/Nepgear/1.gif`,`./img/Nepgear/2.jpg`,`./img/Nepgear/3.jpg`,`./img/Nepgear/4.jpg`,`./img/Nepgear/5.jpg`,`./img/Nepgear/6.png`,`./img/Nepgear/7.jpg`,`./img/Nepgear/8.jpg`,`./img/Nepgear/9.jpg`,`./img/Nepgear/10.jpg`,`./img/Nepgear/11.jpg`,`./img/Nepgear/12.jpg`,`./img/Nepgear/13.png`,`./img/Nepgear/14.jpg`,`./img/Nepgear/15.jpg`,`./img/Nepgear/15.png`,`./img/Nepgear/16.png`,`./img/Nepgear/17.jpg`,`./img/Nepgear/18.jpg`,`./img/Nepgear/19.png`,`./img/Nepgear/20.jpg`,`./img/Nepgear/21.png`,`./img/Nepgear/22.jpg`,`./img/Nepgear/23.png`,`./img/Nepgear/24.png`,`./img/Nepgear/25.png`,`./img/Nepgear/26.jpg`,`./img/Nepgear/27.jpg`,`./img/Nepgear/28.jpg`,`./img/Nepgear/29.jpg`,`./img/Nepgear/30.png` ];
	const rng = Math.round(Math.random()*photos.length);
	
	message.channel.send("Nepgear is life <3", {
		files: [
			photos[rng]
		]
	});
}