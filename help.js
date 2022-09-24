//matriz js 
const matrizJs = ["John", "Peter", "Sally", "Jane"];
//definir string de dados js
const obj2 = {"name":"John","age": 31,"cidade":"colatina"};

//transformar String em obj
const string = JSON.parse(obj);
//transformando obj em String
const obj = JSON.stringify(string);
//transformando matriz em JSON
const matrizJson = JSON.stringify(matrizJs);

//armazenando dados json
const Djs = {name: "John", age: 31, city: "New York"};
const DJson = JSON.stringify(Djs);
localStorage.setItem("JSON", DJson);

//recebendo dados JSON
let JSONSTORAGE = localStorage.getItem("JSON");
let DjsR = JSON.parse(JSONSTORAGE);