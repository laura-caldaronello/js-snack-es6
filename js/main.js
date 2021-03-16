// snack 1: Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
var cycles = [
    {
        'name': 'bicibella',
        'weight': 10
    },
    {
        'name': 'bicibrutta',
        'weight': 15
    },
    {
        'name': 'bicigrande',
        'weight': 20
    },
    {
        'name': 'bicipiccola',
        'weight': 5
    }
];

// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
// modo post correzione
let cycleLight = cycles[0];
cycles.forEach((cycle) => {
    if (cycle.weight < cycleLight.weight) {
        cycleLight = cycle;
    }
}); 
console.log(`La bici più leggera è ${cycleLight.name}, che pesa ${cycleLight.weight}kg`);

// modo 2
var weights = [];
cycles.forEach((element) => weights.push(element.weight));
var lighter = cycles[weights.indexOf(Math.min(...weights))];
const {weight,name} = lighter;
console.log(`La bici più leggera è ${name}, che pesa ${weight}kg`);

// modo 3: individuo io il peso minore (non sapevo in che altro modo usare destructuring)
var [,,,element] = cycles;
console.log(`La bici più leggera è ${element.name}, che pesa ${element.weight}kg`);

// snack 2: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
var teams = [
    {
        'name': 'udinese',
        'punti': 0,
        'falli': 0
    },
    {
        'name': 'bologna',
        'punti': 0,
        'falli': 0
    },
    {
        'name': 'spal',
        'punti': 0,
        'falli': 0
    },
    {
        'name': 'reggiana',
        'punti': 0,
        'falli': 0
    }
];

var newArray = [];
teams.forEach((element) => {
    // Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
    element.punti = Math.floor(Math.random() * 30);
    element.falli = Math.floor(Math.random() * 5);
    // Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
    var {name,falli} = element;
    newArray.push({name,falli});
});
console.log(newArray);