const Discord = require('discord.js');

const ytdl = require('ytdl-core');

const bot = new Discord.Client();

bot.on('ready', function() {
    bot.user.setGame('NRJ');
    console.log('Le bot est connecte');

});

bot.login('NDI4MjA2MjI3NTA0MzY1NTcw.DZvtwA.wLALJn9avxzjHUmfqb1d9lA7zzE')
