/**
 * Fetch - returns a Promise
 * 
 * RESTFul API Endpoint - https://jsonplaceholder.typicode.com/
 * Docs - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 */

 fetch('https://jsonplaceholder.typicode.com/comments/1')
.then(response => response.json())
.then(data => console.log(data));




fetch('https://jsonplaceholder.typicode.com/comments', {
    method: "POST",
    body: JSON.stringify({
        myId: 55,
        name: "Sada"
    })
})
.then(response => response.json())
.then(data => console.log(data));



/**
 * Fetch - Challenge
 * GET the first comments value 'https://jsonplaceholder.typicode.com/comments/1' and log its value.
 * POST a new comment using 'https://jsonplaceholder.typicode.com/comments' and log its value.
 */


 fetch("https://jsonplaceholder.typicode.com/comments/1")
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(console.log("In first"));
 
 fetch("https://jsonplaceholder.typicode.com/comments", {
     method: "POST",
     body: JSON.stringify({
         comment: "Adding my comment here -- Sada"
     })
 })
 .then(response => response.json())
 .then(data => console.log(data))
 .catch(console.log("In second"))