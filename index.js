const mineflayer = require('mineflayer');
const { mineflayer: mineflayerViewer } = require('prismarine-viewer')

const bot = mineflayer.createBot({
    host: 'localhost', 
    username: 'felixcrat@example.com',
    password: '12345678',
    auth: 'microsoft'
});

bot.once('spawn', () => {
    mineflayerViewer(bot, { port: 3007, firstPerson: true })
});
  