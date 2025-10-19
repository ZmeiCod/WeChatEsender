require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:3000",
  "https://localhost:3000",
  "http://localhost:5173",
  "https://localhost:5173",
  "http://5.35.10.236",
  "http://5.35.10.236:3000",
  "http://wechat-esender.ru",
  "http://wechat-esender.ru:3000",
  "https://5.35.10.236",
  "https://5.35.10.236:3000",
  "https://wechat-esender.ru",
  "https://wechat-esender.ru:3000",
];

let corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      console.log("Origin not allowed by CORS:", origin);
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionsSuccessStatus: 200,
  credentials: true,
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use("/api", router);


// Запускаем сервер
const start = async () => {
  try {
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
