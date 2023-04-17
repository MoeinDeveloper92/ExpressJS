import express, { request, response } from "express"
import * as data from './data/mock.json' assert { type: 'json' };


const app = express()
const PORT = 3000;

// second argument is handler, once the route gets found, handle should take action

// Have it in your mind that, get is something you can see on the UI
// GET
app.get("/", (request, response) => {
    response.send("This is a get request at /")
})


// POST
app.post('/create', (request, response) => {
    response.send("this is a post request from /create")
})


// PUT
app.put('/edit', (request, response) => {
    response.send("This is a put method at /edit")
})


// DELETE
app.delete("/delete", (request, response) => {
    response.send("This is a deleete request at /delete")
})


app.listen(PORT, () => {
    console.log(`This app is running on port ${PORT}`)
    console.log(data)
})



// Have it in your mind that , by response we send a message to the client
// Go to Post man to test your HttpRequest