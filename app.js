const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const db = require("./config/db");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(cookieParser());

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("servidor corriendo en el puerto 3001");
  });
});
