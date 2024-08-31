const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "2348050938994" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_17_28_08_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzLFxuICAgICAgICA2MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAzNixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTksXG4gICAgICAgIDg1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICA4NCxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjUwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDQ1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyOSxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDcyLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDUsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDksXG4gICAgICAgIDEzNixcbiAgICAgICAgNzAsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDM5LFxuICAgICAgICA2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTksXG4gICAgICAgIDc3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMzQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgNSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3NixcbiAgICAgICAgOTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDc5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjA0LFxuICAgICAgICA3LFxuICAgICAgICA2LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzksXG4gICAgICAgIDU3LFxuICAgICAgICA4OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDksXG4gICAgICAgIDAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgODgsXG4gICAgICAgIDExNixcbiAgICAgICAgNTgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgNjksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAyMDksXG4gICAgICAgIDY4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIydzV0RGM0RXYrNWJheWZTbHBjUnpHeUJ1RkswTld6MUkrSGlmTkhGMGFrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJkaFI0azdOSFFYV1hwMmRHeDliVjNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjYzN2FiNjJkLTNlOGMtNDAyMy04ZDNiLTljM2IzOWJmNWI3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTIsXG4gICAgICAxNDgsXG4gICAgICAyMDIsXG4gICAgICAyMDAsXG4gICAgICAzLFxuICAgICAgMjUxLFxuICAgICAgODMsXG4gICAgICAxNDUsXG4gICAgICAxODcsXG4gICAgICAxNzEsXG4gICAgICA2NixcbiAgICAgIDE1MyxcbiAgICAgIDEzMSxcbiAgICAgIDE1MCxcbiAgICAgIDIxOSxcbiAgICAgIDgyLFxuICAgICAgMTc1LFxuICAgICAgNzAsXG4gICAgICAyMTQsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMzksXG4gICAgICA4NSxcbiAgICAgIDEyNyxcbiAgICAgIDIzMixcbiAgICAgIDI5LFxuICAgICAgOTEsXG4gICAgICA0NixcbiAgICAgIDI0MSxcbiAgICAgIDk2LFxuICAgICAgMTQyLFxuICAgICAgMTkzLFxuICAgICAgMTI3LFxuICAgICAgNDYsXG4gICAgICAyNCxcbiAgICAgIDUxLFxuICAgICAgMTcxLFxuICAgICAgMTc5LFxuICAgICAgNTMsXG4gICAgICAxMjYsXG4gICAgICA0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjlBMjJLS1REXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDUwOTM4OTk0OjQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSU5WRVNUT1IgRkFXQVpcIixcbiAgICBcImxpZFwiOiBcIjE1Njk0Njg5NjI4MTY2MDo0NkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQZk8ySThHRUx1bHpiWUdHQW9nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhsTnVQMGhHakUxQjByWjNPYXV2VXorVWJ6eURpTTBLYXBuZTNjSjhwUmM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiTXYxV3dVMjgvK0diaE5NVTFpaUdHOXI3SWwvWmNWVW8rZm1oWGFIS3dST2FVQVFLV1ZLOEZiNDduT0JFVHp5L283UE16Q2NZbjJRY05BQ3AxSHNMQ2c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTlhqdDBPU0NiZFY5bnpCekRERzNGUFhCc0QwY1lmZlhHT051T3VWREtCR2czNnhhMFF0SHFlYllMa3BoWmpDTGZQSlgycmVBZTFRNHZLd1VtYkVBanc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA1MDkzODk5NDo0NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTEyNTMxMFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
