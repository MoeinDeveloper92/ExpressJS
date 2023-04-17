import express, { request, response } from "express"
import * as data from './data/mock.json' assert { type: 'json' };


const app = express()
const PORT = 3000;

// second argument is handler, once the route gets found, handle should take action
app.get("/", (request, response) => {
    response.send("This is a get request at /")
})


app.listen(PORT, () => {
    console.log(`This app is running on port ${PORT}`)
    console.log(data)
})
