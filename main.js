// Generiamo una password composta da:
// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// aggiungiamo alla fine un numero
// Infine scriviamo sulla pagina "la tua password 
// insicurissima è: nomecognomecolorepreferito21"

// nome utente
let Name = prompt('inserire il nome:');

console.log(Name);

// cognome utente
let LastName = prompt('inserire il cognome:');

console.log(LastName);

// colore preferito utente
let Color = prompt('inserire colore preferito:');

console.log(Color);

// numero
const Number = 46;

console.log(Number);


// la tua password è

let Password = document.getElementById("text").innerHTML = `La tua password insicurissima è: ${Name+LastName+Color+Number}`;

console.log(Password)











