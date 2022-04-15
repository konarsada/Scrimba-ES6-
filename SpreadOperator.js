let contacts = ["Mary", "Joel", "Danny"];

// this also changes personalFriends1
let personalFriends1 = contacts;
contacts.push("John");

console.log(contacts);
console.log(personalFriends1);

// this also changes personalFriends1
let personalFriends2 = ["David", ...contacts, "Brad"];
contacts.push("Will");

console.log(contacts);
console.log(personalFriends2);

let person = {
    name: "Adam",
    age: 25,
    city: "Manchester"
};

let employee = {
    ...person,
    company: "CTS"
};

console.log(person);
console.log(employee);