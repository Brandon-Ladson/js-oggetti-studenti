// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// array con oggetti contenenti i dati degli studenti
var listaStudenti = [

  {
    "nome": "jerod",
    "cognome": "shelby",
    "eta": 52
  },

  {
    "nome": "gordon",
    "cognome": "murray",
    "eta": 74
  },

  {
    "nome": "horacio",
    "cognome": "pagani",
    "eta": 64
  },

  {
    "nome": "gianpaolo",
    "cognome": "dallara",
    "eta": 83
  },

];

// ciclo for per ciclare la lista studenti e per stampare il loro nome e cognome
for (var key in listaStudenti) {

  console.log(listaStudenti[key].nome + " " + listaStudenti[key].cognome);

}
