//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

console.log(breakfastMenu());
console.log(lunchMenu());

const dinnerMenu = () => {
    return "I'm going to eat a burger for dinner";
}

// returns the function
console.log(dinnerMenu);

console.log(dinnerMenu());


/* Default Params */
const leadSinger = (artist = "default value") => console.log(`${artist} is the lead singer`);
// leadSinger("Rahul");
leadSinger();