// Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.

var datiStudenti = {
  "nome": "brandon",
  "cognome": "ladson",
  "eta": 21
};

// console.log(datiStudenti);

for (var key in datiStudenti) {
  console.log(key + ": " + datiStudenti[key]);
}
