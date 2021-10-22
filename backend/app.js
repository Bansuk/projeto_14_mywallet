import express from "express";
import cors from "cors";
import { getTransactions, postTransaction } from "./controllers/transaction.js";
import { signUp } from "./controllers/account.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/transactions", getTransactions);
app.post("/transactions", postTransaction);

app.post("/signup", signUp);

export default app;
