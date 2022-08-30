const express = require('express');
const server = express(); // to import express framework
const weatherData = require('./data/weather.json');
const cors = require('cors');
require('dotenv').config();

server.use(cors());// will allow anyone to send me req!

const PORT = process.env.PORT; //my local IP address

//http:localhost:3131/
server.get('/', (req, res) => {
    res.send("This is the home Route for Lab7- Weather application ")
})

//http:localhost:3131/weatherDataRoute
server.get('/weatherDataRoute', (req, res) => {
    let allData = weatherData.map((item) => {
        return item.city_name;
    })
    console.log(JSON.stringify(allData));
    res.send(JSON.stringify(allData));
})

// we will create a new route in order to save the request that the user want
// http:localhost:3131/getWatherData?name=weatherDatas
server.get('/getWatherData', (req, res) => {
    // console.log(req.query["city_name"]);
    const result = weatherData.find((item) => {
        // console.log(item, "TAREQ");
        return item.city_name == req.query.name;

    })
    console.log(result);
    res.send(result);
    // console.log("H!");
    // res.send("HI!");
})

//http:localhost:3131/testRoute
server.get('/testRoute', (req, res) => {
    res.send("hello from testRoute!!") //very good! 
})

server.get('*', (req,res)=>{
    res.send("page not found");
})

server.listen(PORT, () => {
    //console.log("hello"); // to test
    console.log(`check the port -> ${PORT}`); // everything is working (Y);
})