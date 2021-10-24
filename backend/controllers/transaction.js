import connection from "../../database/database.js";
import { transactionSchema } from "../../validation/schemes.js";

const getTransactions = async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    try {
        const session = await connection.query(
            "SELECT * FROM session WHERE token = $1;",
            [token]
        );

        if (!session.rowCount) return res.sendStatus(403);

        const transactions = await connection.query(
            "SELECT * FROM transaction WHERE account_id = $1;",
            [session.rows[0].account_id]
        );

        transactions.rowCount
            ? res.status(200).send(transactions.rows)
            : res.sendStatus(204);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const postTransaction = async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(403);

    const { description, value } = req.body;

    if (transactionSchema.validate({ description, value }).error)
        return res.sendStatus(400);

    try {
        const session = await connection.query(
            "SELECT * FROM session WHERE token = $1;",
            [token]
        );

        if (!session.rowCount) return res.sendStatus(401);

        await connection.query(
            "INSERT INTO transaction (date, description, value, account_id) VALUES (CURRENT_DATE, $1, $2, $3);",
            [description, value, session.rows[0].account_id]
        );

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { getTransactions, postTransaction };
