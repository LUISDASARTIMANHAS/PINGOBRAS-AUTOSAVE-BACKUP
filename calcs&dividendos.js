const xmlReqJson = new XMLHttpRequest();


xmlReqJson.onreadystatechange = function(DBDIVIDENDOS) {
  if (this.readyState == 4 && this.status == 200) {
    const DBDIVIDENDOS = JSON.parse(this.responseText);    
   console.log(DBDIVIDENDOS)
  }
  
  
  
  
  
  
  
  
  return
};

xmlReqJson.open("GET", "/data/dividendos.json", true);
xmlReqJson.send();