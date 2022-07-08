let handler = async m => m.reply(`
╭─「 Donasi • Dana, Gopay, OVO, LinkAja 」
│ •  [0813-7775-4080]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler