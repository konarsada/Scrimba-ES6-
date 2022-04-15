let incomes = [62000, 67000, 75000];
let total = 0;

for (let income of incomes) {
    console.log(income);
    total += income;
}

console.log(total);

let about = "Sadabrata is learning Frontend Roadmap"

for (const myChar of about) {
    console.log(myChar);
}

const students = [ 
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris"},
    { name: "Kate", city: "Sidney" }
];

for (const item of students) {
    const {name, city} = item;
    console.log(`${name} lives in ${city}`);
}

/*

// Gives an error as an object is not an iterable

const temp = { name: "John", city: "New York" };
for(item of temp) {
    console.log(item);
}
*/