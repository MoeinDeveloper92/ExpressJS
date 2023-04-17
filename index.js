import express, { request, response } from "express"
import * as data from './data/mock.json' assert { type: 'json' };


const app = express()
const PORT = 3000;

// Using the public folder at the root of the project
// bellow folder will be serve from the root directory
// What if you want to make sepecific route fro your image
app.use(express.static("public"));

// Using the images folder at the route / images
// /images denotes a route that it serves content of the image file
// second argument means we want to pull images from the image folder
app.use("/images", express.static("images"))

// second argument is handler, once the route gets found, handle should take action

// Have it in your mind that, get is something you can see on the UI
// GET
app.get("/", (request, response) => {
    // it meas we want to send data to the ui in json format
    response.json(data)
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