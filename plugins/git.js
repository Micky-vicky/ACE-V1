const Asena = require('../events');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const Language = require('../language');

const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/mzS0HXx/ANUSER-2.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*THIS BOT CREATED BY ANUSER😎*

───────────────────────────────────────────
*𝐆𝐢𝐭𝐡𝐮𝐛 𝐥𝐢𝐧𝐤: https://github.com/ANUSER1/ACE-V1*
_____________________________________________________
*𝐂𝐫𝐞𝐚𝐭𝐞𝐫 𝐢𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦: https://instagram.com/_0anshd0_?utm_medium=copy_link*
__________________________________________________________
*𝐂𝐫𝐞𝐚𝐭𝐞𝐫 𝐰𝐚 𝐧𝐮𝐦𝐛𝐞𝐫:    http://wa.me/+916238560742*
____________________________________________________________
*𝐏𝐮𝐛𝐥𝐢𝐜 𝐛𝐨𝐭 𝐠𝐫𝐨𝐮𝐩:    https://chat.whatsapp.com/KeEMhqBW644IN46PYsGDWf*
________________________________________________________________
       *ANUSER BOT V.2 COMING SOON*

`}) 

}));

