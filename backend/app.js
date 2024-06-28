import express, { json } from "express";
import cors from "cors";
import mysql from "mysql2";
import fs from "node:fs";

const app = express();
const PORT = process.env.PORT || 3000;

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "procesos",
});

app.use(cors({ origin: "*" }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


app.get("/contrataciones", (req, res) => {
  try {
    conn.connect((err) => {
      console.log("Conectado a la base de datos");
      conn.query("SELECT * FROM presupuesto", (err, results) => {
        if (err) throw err;
        console.log("Consulta ejecutada correctamente");

        res.json(results);
      });
    });
  } catch (err) {
    console.log(err);
  }
});

app.get("/contrataciones/:table/:value", (req, res) => {
  try {
    conn.connect((err) => {
      console.log("Conectado a la base de datos");
      conn.query(
        `SELECT * FROM presupuesto WHERE ${req.params.table} = ?`,
        [req.params.value],
        (err, results) => {
          if (err) throw err;
          console.log("Consulta ejecutada correctamente");

          res.json(results);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
