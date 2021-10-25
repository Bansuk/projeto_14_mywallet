import express from "express";
import cors from "cors";
import {
    getBalance,
    getTransactions,
    postTransaction,
} from "./controllers/transaction.js";
import { signUp, signIn, signOut } from "./controllers/account.js";

const app = express();

app.use(express.json());
app.use(cors());

app.get("/transactions", getTransactions);
app.get("/balance", getBalance);
app.post("/transaction", postTransaction);

app.post("/signup", signUp);
app.post("/signin", signIn);
app.delete("/signout", signOut);

export default app;
