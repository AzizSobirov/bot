const TelegramBot = require('node-telegram-bot-api');
const token = '1947097117:AAEHKytSb7_H-zNE3aUJXTfL_p7P6u_gI2w';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  if(msg.text.toLocaleLowerCase().includes("start")){
      bot.sendMessage(chatId, "Welcome " + msg.from.first_name)
  }else if(msg.text.toLocaleLowerCase().includes("dice")){
    bot.sendDice(chatId)
  }

});

