let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

_MINTA AJA SAMA OWNER KAK FREE, SC TIDAK DI PERJUAL BELIKAN_

📍 *N o t e :* 
• Jangan lupa minta izin owner sebelum menggunakan scriptnya kak!
• Jangan Lupa kasih star, follow & kasih credit
• Dilarang menjual Script Ini!
• Jika menemukan bug di script, harap lapor owner
• Dilarang reupload sc, Hanya boleh fork

OPEN SEWABOT/JASARUN 
LIST HARGA SEWABOT :
1 MINGGU : 5K
1 BULAN : 10K
PERMANEN : 20K

LIST HARGA JASARUN :
20K PERMANEN, JIKA BOT MATI TERUS²AN BOLEH GANTI SC FREE YA KK! 

conn.sendBut(m.chat, esce, 'Ingfo Bermanfaat', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
