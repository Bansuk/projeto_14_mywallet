import express from "express";
import cors from "cors";
import connection from "../database/database.js";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(4000);
