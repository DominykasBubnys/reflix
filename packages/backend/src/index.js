const express = require("express")
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
require('dotenv').config();


// Routes
const MovieRoute = require("./routes/movie-routes.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-methods","GET,POST,PATCH,DELETE");

    next();
})

app.use(MovieRoute);

mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0-shard-00-00.4afhm.mongodb.net:27017,cluster0-shard-00-01.4afhm.mongodb.net:27017,cluster0-shard-00-02.4afhm.mongodb.net:27017/${process.env.DB_NAME}?ssl=true&replicaSet=atlas-14l6ii-shard-0&authSource=admin&retryWrites=true&w=majority`)
.then(app.listen(process.env.PORT || 5000))
.catch(
    (err) => console.log("connecting mongoose returns an error: ", err)
);