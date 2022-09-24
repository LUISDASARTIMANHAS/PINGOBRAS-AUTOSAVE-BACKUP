import * as axios from 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js';
async function ini() {
  try {
    const response = await axios.get('https://pingobras.glitch.me/json/DB.json');
    alert(response.data[1].nomeCad)
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

ini();