exports.run = (clair, message, args) => {
    message.channel.send(args[0]);
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
        .setTitle("Boss Monsters List")
        .setColor(0xff00ff)
        .addField("Normal Monsters", "1: Guard Vermin\n2: Hraesvelgr\n3: Black Heart\n4: Slash Dog\n5: Killachine\n6: Forest Whale\n7: Ancient Dragon\n8: Killachine Mk-3\n9: Self-Defense System\n10: Item Jammer Pod\n11: Skill Jammer Pod\n12: Overlord Momus\n13: Fake Purple Heart\n14: Fake Black Heart\n15: Fake White Heart\n16: Fake Green Heart\n17: Arfoire\n18: True Arfoire\n");
    message.channel.send({embed});
}