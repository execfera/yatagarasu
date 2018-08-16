import * as djs from 'discord.js';
import { Commands } from './commands';
import { Storage } from './storage/storage';

const storage = Storage.getStorage();

const client = new djs.Client();

client.on('ready', () => {
  console.log('yatagarasu online');
});

client.on('message', (message) => {
  if (message.content === 'ping') {
    try {
      message.channel.send(`Actual version: ${storage.pack.version}, ` +
        `Inner version: ${storage.inner.version}, ` +
        `Command version: ${Commands.getStorage().version}`);
    } catch (err) {
      console.error(err);
    }
  }

  if (message.content === 'change') {
    storage.changePack();
    message.channel.send('changing storage done');
  }

  if (message.content === 'reinit') {
    storage.initPack();
    message.channel.send('packs reinitiated');
  }
});

client.login('NDc4MDEyNzA2NDQ4NzM2Mjgw.DlEhWg.a561H3dZtonKGWhFzhsHDFcc4lw');
