const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://i.ibb.co/mzS0HXx/ANUSER-2.jpg", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: `*THIS BOT CREATED BY ANUSER😎*
─────────────────────────────────────────────────────────────────
*GITHUB LINK: https://github.com/ANUSER1/ACE-V1*

*CREATER INSTA: https://instagram.com/anshid__8055?utm_medium=copy_link*

*CREATER WA NUMBER:    http://wa.me/+916238560742*

*ANUSER WA GROUP:      https://chat.whatsapp.com/CTqoTm0dnX8FsNmaFRYmJ4*


       *ANUSER BOT V.2 COMING SOON*


`}) 

}));
