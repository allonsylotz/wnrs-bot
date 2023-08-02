var Discord = require('discord.js');
var auth = require('./auth.json');

//logger mostly used for debugging

var logger = require('winston');

logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';

var re = new RegExp('(hello( *)wrns-bot)', 'i');

var bot = new Discord.Client();

//logger mostly used for debugging

bot.on('ready', () => {
  logger.info('Connected!');
});

bot.on('message', msg => {
  if (re.test(msg.content)) {
    msg.reply('Hello world!');
  }
});

bot.login(auth.token);
