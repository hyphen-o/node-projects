const request = require("request");
const dotenv = require("dotenv").config();

const options = {
    url: `https://api.openweathermap.org/data/2.5/weather?q=${process.argv[2]}&appid=${process.env.API_KEY}`,
    method: "GET",
    json: true,
}

request(options, (error, res, body) => {
    console.log(`現在の${process.argv[2]}の気温は${body.main.temp}度、天気は${body.weather[0].main}です.`)
});