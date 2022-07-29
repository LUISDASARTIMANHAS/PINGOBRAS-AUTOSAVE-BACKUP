 src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"

async function getIpClient() {
  try {
    const response = await axios.get('https://api.ipify.org?format=json');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

getIpClient();