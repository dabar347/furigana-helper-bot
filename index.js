const Telebot = require('telebot');
const bot = new Telebot(process.env.BOT_TOKEN);
const generateFurigana = require('./furigana.js');

bot.on(['text','forward'], (msg) => {generateFurigana(msg.text,(x) => {
  console.log(x);
  msg.reply.text(x,{parseMode: 'markdown'});
})});

bot.start();
