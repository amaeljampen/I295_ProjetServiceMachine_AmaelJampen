import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

import { initDb, sequelize } from "./db/sequelize.mjs";

sequelize
    .authenticate()
    .then((_) =>
        console.log("La connexion à la base de données a bien été établie")
    )
    .catch((error) => console.error("Impossible de se connecter à la DB"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/api/", (req, res) => {
    res.redirect(`http://localhost:${port}/`);
});

import { productsRouter } from "../routes/products.mjs";
app.use("/api/products", productsRouter);

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});

sequelize
    .authenticate()
    .then((_) =>
        console.log("La connexion à la base de données a bien été établie")
    )
    .catch((error) => console.error("Impossible de se connecter à la DB"));

initDb();
