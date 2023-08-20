import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import {apiKey} from "./apiKey.js";
import { getAnswer } from "./utils.js";

const app = express();
const PORT = 3000;
const API_URL = "https://api.api-ninjas.com/v1/weather?city=";
const config = {
    headers: { "X-Api-Key": apiKey },
  };

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/", async (req, res) => {
    const city = req.body.city;
    try {
        const result = await axios.get(API_URL + city, config);
        const answer = getAnswer(result.data.temp);
        res.render("index.ejs", {result: answer});
      } catch (error) {
        res.render("index.ejs", { result: error});
      }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });