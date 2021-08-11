const TeleBot = require('telebot');
const BOT_TOKEN = '1947097117:AAEHKytSb7_H-zNE3aUJXTfL_p7P6u_gI2w'
const bot = new TeleBot(BOT_TOKEN);
const chatIds = []

// bot.on(['/start', '/hello'], (msg) => msg.reply.text('Xush kelibsiz!'));

bot.on('/start', (msg) => {
    let chatId = msg.chat.id;
    if(!chatIds.includes(chatId)){
        chatIds.push(chatId)
        msg.reply.text(`Salom, ${ msg.from.first_name }!`);
    }
  });
  
// text reply
bot.on('text', (msg) => { 
        msg.reply.text('Xabaringiz qabul qilindi javobni tez fursatda olasiz.')  
})

// soat
bot.on('/soat', (msg) => { 
    let date = new Date()
    let hour = date.getHours()
    let min = date.getMinutes()
    let clock = `Soat ${hour} : ${min} bo'ldi`
        msg.reply.text(clock)  
})

// sticker
bot.on('sticker', (msg) => {
    return msg.reply.sticker('http://i.imgur.com/VRYdhuD.png', { asReply: true });
});

  bot.on('/stop', (msg) => {
    let chatId = msg.chat.id;
    chatIds.pop(chatId)
  });
  
bot.start()