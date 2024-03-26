const express = require("express")
const app = express()

app.get("/", (req, res)=> res.send("This Stuff in Really Not Funny"))
app.listen(3000, ()=> console.log("The server is running"))
