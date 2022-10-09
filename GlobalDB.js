let db = [
{"nomeCad": "administrador",
 "userCad": "equipe",
 "senhaCad": "administrador",
 "saldoCad": 1500.90,
 "PerfilIMG":""},

{"nomeCad": "Florisvaldo de Oliveira Schulz", 
 "userCad": "Valdo", 
 "senhaCad": "96451290", 
 "saldoCad": -12,
 "PerfilIMG":"https://cdn.glitch.global/b39d6a4a-0e14-4b41-930d-29d3ccd6c137/valdo.jpg?v=1665316103313"},

{"nomeCad": "Luis Augusto de Souza Carvalho", 
 "userCad": "LUIS DAS ARTIMANHAS", 
 "senhaCad": "998774163", 
 "saldoCad": 22,
 "PerfilIMG":"https://cdn.discordapp.com/avatars/533042065408262164/33fa87caed0f1a449be530fef6a1d71b.webp?size=2048"},

{"nomeCad": "José Eduardo Batista de Souza", 
 "userCad": "notfound", 
 "senhaCad": "10062002", 
 "saldoCad": 1,
 "PerfilIMG":""},
  
{"nomeCad": "Diogo Antonio Nienke Batista", 
 "userCad": "did zin", 
 "senhaCad": "z0mbieltr2", 
 "saldoCad": 7,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/946172847108264026/1023227651223207966/306100080_633632671438689_3474531611291345899_n.jpg"} 
]
const dbString = JSON.stringify(db);
localStorage.setItem("GlobalDB",dbString)