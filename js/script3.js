// Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// propmt per far inserire all'utente il suo nome
var nomeUtente = prompt("scrivi il tuo nome");

// propmt per far inserire all'utente il suo cognome
var cognomeUtente = prompt("scrivi il tuo cognome");

// propmt per far inserire all'utente la sua età
var etaUtente = parseInt(prompt("scrivi quanti anni hai"));

// oggetto contenente i dati dell'utente
var oggettoUtente = {
  "nome": nomeUtente,
  "cognome": cognomeUtente,
  "eta": etaUtente
}

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

// aggiungo l'oggetto contenente i dati dell'utente nel array lista studenti
listaStudenti.push(oggettoUtente);

// ciclo for per ciclare la lista studenti e per stampare il loro nome e cognome
for (var key in listaStudenti) {

  console.log(listaStudenti[key].nome + " " + listaStudenti[key].cognome + " " + listaStudenti[key].eta);

}
