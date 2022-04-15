const player = {
    playerName: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};
console.log(player.playerName);

// Destructure by the keys
const {playerName, club} = player;
console.log(`${playerName} plays for ${club}`);

const {address: {city}} = player;
// console.log(address); -> Will give error
console.log(city);