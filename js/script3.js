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

// aggiungo l'oggetto contenente i dati dell'utente nel array lista studenti
listaStudenti.push(oggettoUtente);

// PER FARE PUSH DELL'OGGETTO SENZA CREARE VARIABILE oggettoUtente
// listaStudenti.push(
//   {
//     "nome": nomeUtente,
//     "cognome": cognomeUtente,
//     "eta": etaUtente
//   }
//);

// ciclo for per ciclare la lista studenti e per stampare il loro nome e cognome
for (var i = 0; i < listaStudenti.length; i++) {
  console.log(listaStudenti[i].nome + " " + listaStudenti[i].cognome + " " + listaStudenti[i].eta);
}
