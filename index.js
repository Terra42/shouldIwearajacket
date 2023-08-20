import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import {apiKey} from "./apiKey.js";

const app = express();
const PORT = 3000;
const API_URL = "https://api.api-ninjas.com/v1/weather?city=";

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs");
    
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
