const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const controller = require('./controller')

app.get("/api/compliment", controller.getCompliment);
app.get("/api/fortune", controller.getFortune);
app.get("/api/quote", controller.getQuote);
app.get("/api/horoscope", controller.getHoroscope);
app.get("/api/selfcare", controller.getSelfCare);

app.listen(4004, () => console.log("Server running on 4004"));
