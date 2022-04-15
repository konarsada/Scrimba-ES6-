function addressMaker(city, state) {
    const newAddress1 = {newCity: city, newState: state}
    console.log(newAddress1)

    const newAddress2 = {city, state}
    console.log(newAddress2)
}

addressMaker("Austin", "Texas")