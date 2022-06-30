let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

_MINTA AJA SAMA OWNER KAK FREE, SC TIDAK DI PERJUAL BELIKAN_

WHATSAPP OWNER :
https://wa.me/6288270863279

📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star, follow & kasih credit
• Dilarang menjual Script Ini!
• Jika menemukan bug di script, harap lapor owner
• Dilarang reupload sc, Hanya boleh fork

conn.sendBut(m.chat, esce, 'Ingfo Bermanfaat', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
