// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

// array con oggetti contenenti i dati degli studenti
var listaStudenti = [

  {
    "nome": "Jerod",
    "cognome": "Shelby",
    "eta": 52
  },

  {
    "nome": "Gordon",
    "cognome": "Murray",
    "eta": 74
  },

  {
    "nome": "Horacio",
    "cognome": "Pagani",
    "eta": 64
  },

  {
    "nome": "Gianpaolo",
    "cognome": "Dallara",
    "eta": 83
  },

];

// ciclo for per ciclare la lista studenti e per stampare il loro nome e cognome
for (var i = 0; i < listaStudenti.length; i++) {
  console.log(listaStudenti[i].nome + " " + listaStudenti[i].cognome);
}
