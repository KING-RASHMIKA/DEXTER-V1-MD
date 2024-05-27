const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94717775628'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkk1MTgraWVoeU9QL0xDK2QyMWwvTFZsMklQVnlhUHV0UUFCMGNqejVIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUTZpaFkrK1hORXQ3WVp4SzdyQWxMZEl3OFJ6N2YzUkY5K1VnbTBoNXMyYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxR213cVk3UlcyNjNMS29CZWF1cGtCdFB4b3VrakI0c2NQNkYxUlBHNVh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4eGVFaWFubzRtYUpWbC9QVG8vbVJqS1FJY3RCRXdiQStvM1JUbkhLOEVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCSmR1NWczeWIvNm9KbFozdHUvQ0JXdEhLWkJzcjYvQTZ0TTErNFVNV009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhnazVvRDVvaUxNSXBsajY0aFpraENITGFmMEs5WmxJVFNjQzNaMjlTMW89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0sySUV6TDlKYmFSVEZsS2l6RjhFQUNhdWhPMm9tTzNTd2VvZ3hrVHJrTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0crdlN3OGlZcjZWTGV5ZTVzdjlNTVI1aklDYWt1NGtCYWJoUW9xQThuZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inc5bmFjNkFmT05FMi9pcDJtWnQ0QmNRQm9mUUZFSVlSNmF3U3pOMUxlRXorVzVyUzA5YVNsN1ZwSk4wSlFWWkdPOWIrMnJFM245NlBLZjVldzd4Q2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjMsImFkdlNlY3JldEtleSI6IjJhV3NGNXFHazh2Vi94VDhzem9jRGJ0MHNZQnlVUXRvcndTdWVsRUFVbFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTg3NzU2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQ0IwQTk2ODNDNTg1QTZENDU4ODM5MUE4RDZGRDI3QzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNjgwOTE0Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3NTg3NzU2MjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTBGRjgzRUZBQkMzRkExNDYzRjhCRUYyNTgwNTlFNzQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcxNjgwOTE0Mn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiN2E4bmJFOWhURVdwQ0tfY1M3aVF6USIsInBob25lSWQiOiI4NDQ1NGY2Yi1kYWJlLTRlZWQtOTFjMi03MGQ5NzZmOGNmYWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFAxS3BKOXNndG14akRyUVVzYUlRWk5XbkVJPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldKMTYwMktSTWtkT1VkaTdERUx4M2tzVWdKQT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiIyQjQ3Q0xRWSIsIm1lIjp7ImlkIjoiOTQ3NTg3NzU2Mjg6OEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSYXNobWlrYSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTTJicXE4SEVLZmIwYklHR0FJZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiMHo3Ly9EMm5SbVBRaTFRZWFzZVVLd3k3bDI1cS91UmdjZmVXQVR2bk5qZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRXhlTTN5TE55UVhqSGZEVU9VK2JLN2tCQUkwalQwcm1IQmJKZ25pOHJvdXVQWHpTMU1JYzRTUjZBVzRjNmVLZTJtK0NqbHFSbTZqcWREWFNmNXkxQXc9PSIsImRldmljZVNpZ25hdHVyZSI6IjR1NERnS05vZzlXVCtQWmh5RERIVkZXSkVoNDhsSTVkTmVxWkdsTkEySmUvWEVoWVMvOU9NdUtLaVZKVFNtTVNXVE51akduMnB4MDVQTkFvM05NMWlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTg3NzU2Mjg6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkTSsvL3c5cDBaajBJdFVIbXJIbENzTXU1ZHVhdjdrWUhIM2xnRTc1elk0In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzE2ODA5MTM5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUR0NiJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'J.Rashmika' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
