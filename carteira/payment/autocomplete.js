var pais = ["Afghanistan","Albania","Algeria",
                 "Andorra","Angola","Anguilla",
                 "Antigua & Barbuda","Argentina",
                 "Armenia","Aruba","Australia",
                 "Austria","Azerbaijan","Bahamas",
                 "Bahrain","Bangladesh","Barbados",
                 "Belarus","Belgium","Belize",
                 "Benin","Bermuda","Bhutan",
                 "Bolivia","Bosnia & Herzegovina",
                 "Botswana","Brazil","British Virgin Islands",
                 "Brunei","Bulgaria","Burkina Faso",
                 "Burundi","Cambodia","Cameroon",
                 "Canada","Cape Verde","Cayman Islands",
                 "Central Arfrican Republic","Chad",
                 "Chile","China","Colombia",
                 "Congo","Cook Islands","Costa Rica",
                 "Cote D Ivoire","Croatia","Cuba",
                 "Curacao","Cyprus","Czech Republic",
                 "Denmark","Djibouti","Dominica",
                 "Dominican Republic","Ecuador",
                 "Egypt","El Salvador","Equatorial Guinea",
                 "Eritrea","Estonia","Ethiopia",
                 "Falkland Islands","Faroe Islands","Fiji",
                 "Finland","France","French Polynesia",
                 "French West Indies","Gabon","Gambia",
                 "Georgia","Germany","Ghana",
                 "Gibraltar","Greece","Greenland",
                 "Grenada","Guam","Guatemala",
                 "Guernsey","Guinea","Guinea Bissau",
                 "Guyana","Haiti","Honduras",
                 "Hong Kong","Hungary","Iceland",
                 "India","Indonesia","Iran",
                 "Iraq","Ireland","Isle of Man",
                 "Israel","Italy","Jamaica",
                 "Japan","Jersey","Jordan",
                 "Kazakhstan","Kenya","Kiribati",
                 "Kosovo","Kuwait","Kyrgyzstan",
                 "Laos","Latvia","Lebanon",
                 "Lesotho","Liberia","Libya",
                 "Liechtenstein","Lithuania","Luxembourg",
                 "Macau","Macedonia","Madagascar",
                 "Malawi","Malaysia","Maldives",
                 "Mali","Malta","Marshall Islands",
                 "Mauritania","Mauritius","Mexico",
                 "Micronesia","Moldova","Monaco",
                 "Mongolia","Montenegro","Montserrat",
                 "Morocco","Mozambique","Myanmar",
                 "Namibia","Nauro","Nepal",
                 "Netherlands","Netherlands Antilles","New Caledonia",
                 "New Zealand","Nicaragua","Niger",
                 "Nigeria","North Korea","Norway",
                 "Oman","Pakistan","Palau",
                 "Palestine","Panama","Papua New Guinea",
                 "Paraguay","Peru","Philippines",
                 "Poland","Portugal","Puerto Rico",
                 "Qatar","Reunion","Romania",
                 "Russia","Rwanda","Saint Pierre & Miquelon",
                 "Samoa","San Marino","Sao Tome and Principe",
                 "Saudi Arabia","Senegal","Serbia",
                 "Seychelles","Sierra Leone","Singapore",
                 "Slovakia","Slovenia","Solomon Islands",
                 "Somalia","South Africa","South Korea",
                 "South Sudan","Spain","Sri Lanka",
                 "St Kitts & Nevis","St Lucia","St Vincent",
                 "Sudan","Suriname","Swaziland",
                 "Sweden","Switzerland","Syria",
                 "Taiwan","Tajikistan","Tanzania",
                 "Thailand","Timor L'Este","Togo",
                 "Tonga","Trinidad & Tobago","Tunisia",
                 "Turkey","Turkmenistan","Turks & Caicos",
                 "Tuvalu","Uganda","Ukraine",
                 "United Arab Emirates","United Kingdom",
                 "United States of America","Uruguay",
                 "Uzbekistan","Vanuatu","Vatican City",
                 "Venezuela","Vietnam","Virgin Islands (US)",
                 "Yemen","Zambia","Zimbabwe"];
var cidades = [
        "Acrelândia",
        "Assis Brasil",
        "Brasiléia",
        "Bujari",
        "Colatina",
        "Cruzeiro do Sul",
        "Epitaciolândia",
        "Feijó",
        "Jordão",
        "Mâncio Lima",
        "Manoel Urbano",
        "Marechal Thaumaturgo",
        "Plácido de Castro",
        "Porto Acre",
        "Porto Walter",
        "Rio Branco",
        "Rodrigues Alves",
        "Santa Rosa do Purus",
        "Sena Madureira",
        "Senador Guiomard",
        "Tarauacá",
        "Xapuri",
        "Água Branca",
        "Anadia",
        "Arapiraca",
        "Atalaia",
        "Barra de Santo Antônio",
        "Barra de São Miguel",
        "Batalha",
        "Belém",
        "Belo Monte",
        "Boca da Mata",
        "Branquinha",
        "Cacimbinhas",
        "Cajueiro",
        "Campestre",
        "Campo Alegre",
        "Campo Grande",
        "Canapi",
        "Capela",
        "Carneiros",
        "Chã Preta",
        "Coité do Nóia",
        "Colônia Leopoldina",
        "Coqueiro Seco",
        "Coruripe",
        "Craíbas",
        "Delmiro Gouveia",
        "Dois Riachos",
        "Estrela de Alagoas",
        "Feira Grande",
        "Feliz Deserto",
        "Flexeiras",
        "Girau do Ponciano",
        "Ibateguara",
        "Igaci",
        "Igreja Nova",
        "Inhapi",
        "Jacaré dos Homens",
        "Jacuípe",
        "Japaratinga",
        "Jaramataia",
        "Jequiá da Praia",
        "Joaquim Gomes",
        "Jundiá",
        "Junqueiro",
        "Lagoa da Canoa",
        "Limoeiro de Anadia",
        "Maceió",
        "Major Isidoro",
        "Mar Vermelho",
        "Maragogi",
        "Maravilha",
        "Marechal Deodoro",
        "Maribondo",
        "Mata Grande",
        "Matriz de Camaragibe",
        "Messias",
        "Minador do Negrão",
        "Monteirópolis",
        "Murici",
        "Novo Lino",
        "Olho d'Água das Flores",
        "Olho d'Água do Casado",
        "Olho d'Água Grande",
        "Olivença",
        "Ouro Branco",
        "Palestina",
        "Palmeira dos Índios",
        "Pão de Açúcar",
        "Pariconha",
        "Paripueira",
        "Passo de Camaragibe",
        "Paulo Jacinto",
        "Penedo",
        "Piaçabuçu",
        "Pilar",
        "Pindoba",
        "Piranhas",
        "Poço das Trincheiras",
        "Porto Calvo",
        "Porto de Pedras",
        "Porto Real do Colégio",
        "Quebrangulo",
        "Rio Largo",
        "Roteiro",
        "Santa Luzia do Norte",
        "Santana do Ipanema",
        "Santana do Mundaú",
        "São Brás",
        "São José da Laje",
        "São José da Tapera",
        "São Luís do Quitunde",
        "São Miguel dos Campos",
        "São Miguel dos Milagres",
        "São Sebastião",
        "Satuba",
        "Senador Rui Palmeira",
        "Tanque d'Arca",
        "Taquarana",
        "Teotônio Vilela",
        "Traipu",
        "União dos Palmares",
        "Viçosa"
      ];

var estados =  [ "AC",'AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO',
]

autocomplete(document.getElementById("cidades"), cidades);
autocomplete(document.getElementById("estados"), estados);

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
    
    let tp = document.querySelector("auto");
    
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("autocompletar");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
    
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function(e) {
              /*insert the value for the autocomplete text field:*/
              inp.value = this.getElementsByTagName("input")[0].value;
              /*close the list of autocompleted values,
              (or any other open lists of autocompleted values:*/
              closeAllLists();
          });
         tp.appendChild(a).appendChild(b);
        }
      }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
}