exports.run = (clair, message, args) => {
	const Discord = require("Discord.js");
	const ball = ["It is certain","It is decidedly so","Neptune says yes!", "Yes Definitely","You may rely on it","As I see it, Yes","Most Likely","Outlook good","Yes","Sign point to yes","Reply hazy try again","Ask again later","Better not tell you now","Cannot predict now","Concentrate and ask again","Don't count on it","My reply is no","Outlook not so good","Very doubtful","Can you repeat the question","That is a lie","Thats a big yes for me","A hundred percent yes","Sorry but no" , "It is like saying humans can fly", "Maybe you need more points to get a yes", "Nepgear says its a no!", "Nepgear says yes!", "Rom and Ram does not agree to it", "Neptune did not understand please try again", "As much as I want Vert's mune, Yes", "Histoire was sealed, maybe your question should too","It is like Seahorse Krin, you do not know what kind of gender", "Noire agrees to it","Rom says maybe", "Gremgear ate you're cake", "Yullipe said that your question was lame she did not want to answer", "Uni says definitely", "Aren't you getting tired of your lame questions?", "Sorry Clair cannot understand please try again later","Noire said she is not interested" , "Fine, I'll give it a yes", "Baka nii-chan", "Omae wa mou Shindeiru" , "NANI?!", "Ram agrees","Noire agrees","Neptune agrees","Vert agrees","Blanc agrees","Rom agrees","Nepgear agrees","Uni agrees","Krin says no","Kyro says yes","Con did not agree","Wheeeeeeeeeeee no!","RNGesus has arrived","Planeptune residents says no","Ask that somewhere else","Are you an idiot?","How stupid of you","I cannot agree more","This is why I *sigh*","Ask that to Tatsumaki","I will answer your question later","Noire says maybe","Vert says maybe","That is the easiest yes I have given","Uhhhh... yes?","Please repeat the question","Did you left your brain somewhere" ];
	const rng = Math.round(Math.random()*ball.length);
	
	
	const embed = new Discord.RichEmbed()
		.setColor(0x0f0f0f)
		.addField(message.author.username, ball[rng], true)
		message.channel.send({embed});
		
}
	