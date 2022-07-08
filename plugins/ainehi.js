let fs = require('fs')
const { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let helloaine = fs.readFileSync('./mp3/WhatsApp Ptt 2022-07-08 at 23.16.20.mp3') 
conn.sendFile(m.chat, helloaine, '', '', m, true)
//conn.sendMessage(m.chat, helloaine, MessageType.audio, {quoted: m, mimetype: 'audio/mp4', ptt:true})
// await conn.sendMessage(m.chat, { audio: { url: helloaine }, mimetype: 'audio/mp4'}, m)
}

handler.customPrefix = /^(hi|hii|hiii|hi golden|hii golden|hiii golden|hy|halo|hallo|helo|hello|hy golden|halo golden|hallo golden|helo golden|hello golden)$/i
handler.command = new RegExp

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false

module.exports = handler
