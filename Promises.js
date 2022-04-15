function buyFlightTicket() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const myError = true;
            // const myError = false;

            if (myError) {
                reject("My reject message");
            }
            else {
                resolve("My resolve message")
            }
        }, 2000);
    });
}

buyFlightTicket()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));

/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
*/


function myPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = "sada";
            // data = false;
            
            if(data) {
                resolve({
                    firstname: data,
                    age: 25
                });
            }
            else {
                reject("data not present");
            }
        }, 2000)
    });
}

myPromise()
    .then((success) => console.log(success))
    .catch((error) => console.log(error));