const photos = []

function photoUpload1() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic1");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = uploadStatus;

    console.log(result);
    console.log(photos);
}

photoUpload1();

async function photoUpload2() {
    let uploadStatus = new Promise((resolve, reject) => {
        setTimeout(() => {
            photos.push("Profile Pic2");
            resolve("Photo Uploaded")
        }, 3000)
    })

    let result = await uploadStatus;

    console.log(result);
    console.log(photos);
}

photoUpload2();

/*
Challenge - Async & Await
Print on the console a random joke from the Chuck Norris API using Fetch and Async and Await
*/

const apiUrl = "https://api.chucknorris.io/jokes/random";

async function getJoke() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    console.log(data.value);
}

getJoke();