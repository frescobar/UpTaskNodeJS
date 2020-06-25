const express = require("express");
const router = require("./routes");
const path = require("path");
const app = express();

//habilitar pug

app.set("view engine", "pug");

//habilitar las carpetas de las vistas

app.set("views", path.join(__dirname, "./views"));

app.use("/", router());

app.listen(3000, () => console.log("Server running on port 3000"));
