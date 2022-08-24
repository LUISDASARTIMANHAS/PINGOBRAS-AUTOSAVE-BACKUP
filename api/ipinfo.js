  async function getIpClient() {
  try {
    let axios = import("https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js")
    const response = await axios.get('https://ipinfo.io/json');
    document.getElementById("city").innerHTML = response.data.city;
    document.getElementById("pais").innerHTML = response.data.country;
    document.getElementById("regiao").innerHTML = response.data.region;
    document.getElementById("timezone").innerHTML = response.data.timezone;
    document.getElementById("location").innerHTML = response.data.loc
    document.getElementById("IP").innerHTML = response.data.ip
    document.getElementById("HostIP").innerHTML = response.data.hostname
    document.getElementById("postal").innerHTML = response.data.postal
    document.getElementById("ISP").innerHTML = response.data.org
    console.log(response);
    alert(axios)
  } catch (error) {
    console.error(error);
  }
}

getIpClient();