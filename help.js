//matriz js 
const matrizobj = ["John", "Peter", "Sally", "Jane"];
//definir string de dados js
const obj2 = {"name":"John","age": 31,"cidade":"colatina"};

//transformar String em obj
const string = JSON.parse(obj);
//transformando obj em String
const obj = JSON.stringify(string);
//transformando matriz em string
const matrizstring = JSON.stringify(matrizobj);

//armazenando dados json
const obj3 = {name: "John", age: 31, city: "New York"};
const string1 = JSON.stringify(obj3);
localStorage.setItem("JSON", string1);

//recebendo dados JSON
let JSONSTORAGE = localStorage.getItem("JSON");
let objJson = JSON.parse(JSONSTORAGE);