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
 "PerfilIMG":""},

{"nomeCad": "Luis Augusto de Souza Carvalho", 
 "userCad": "LUIS DAS ARTIMANHAS", 
 "senhaCad": "998774163", 
 "saldoCad": 4,
 "PerfilIMG":""},

{"nomeCad": "José Eduardo Batista de Souza", 
 "userCad": "notfound", 
 "senhaCad": "10062002", 
 "saldoCad": 1,
 "PerfilIMG":""},
  
{"nomeCad": "Diogo Antonio Nienke Batista", 
 "userCad": "did zin", 
 "senhaCad": "z0mbieltr2", 
 "saldoCad": 5,
 "PerfilIMG":"https://cdn.discordapp.com/attachments/946172847108264026/1023227651223207966/306100080_633632671438689_3474531611291345899_n.jpg"} 
]
const dbString = JSON.stringify(db);
localStorage.setItem("GlobalDB",dbString)