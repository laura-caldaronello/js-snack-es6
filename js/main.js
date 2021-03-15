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
// modo 1
var weights = [];
cycles.forEach((element) => weights.push(element.weight));
var lighter = cycles[weights.indexOf(Math.min(...weights))];
console.log(`La bici più leggera è ${lighter.name}, che pesa ${lighter.weight}kg`);

// modo 2: individuo io il peso minore (non sapevo in che altro modo usare destructuring)
var [,,,element] = cycles;
console.log(`La bici più leggera è ${element.name}, che pesa ${element.weight}kg`);

// snack 2: Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0. Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
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

teams.forEach((element) => {
    element.punti = Math.floor(Math.random() * 30);
    element.falli = Math.floor(Math.random() * 5);
});
const {name,punti,falli} = teams;
console.log(teams);