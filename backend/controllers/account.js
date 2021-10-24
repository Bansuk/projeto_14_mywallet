import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import connection from "../../database/database.js";
import { accountSchema, signInSchema } from "../../validation/schemes.js";

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (accountSchema.validate({ name, email, password }).error)
        return res.sendStatus(400);

    try {
        const result = await connection.query(
            "SELECT * FROM account WHERE email = $1;",
            [email]
        );

        if (result.rowCount) return res.sendStatus(409);

        const passwordHash = bcrypt.hashSync(password, 10);

        await connection.query(
            "INSERT INTO account(name, email, password) VALUES ($1, $2, $3);",
            [name, email, passwordHash]
        );

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const signIn = async (req, res) => {
    const { email, password } = req.body;

    if (signInSchema.validate({ email, password }).error) {
        return res.sendStatus(400);
    }

    try {
        const result = await connection.query(
            "SELECT * FROM account WHERE email = $1;",
            [email]
        );

        //nao achar email

        const user = result.rows[0];

        if (user && bcrypt.compareSync(password, user.password)) {
            const token = uuid();

            await connection.query(
                "INSERT INTO session (token, account_id) VALUES ($1, $2);",
                [token, user.account_id]
            );

            res.send({ name: user.name, token });
        } else {
            res.sendStatus(401);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const signOut = async (req, res) => {
    const token = req.headers.authorization?.replace("Bearer ", "");

    if (!token) return res.sendStatus(401);

    try {
        const result = await connection.query(
            "SELECT * FROM session WHERE token = $1",
            [token]
        );

        if (!result.rowCount) return res.sendStatus(401);

        await connection.query("DELETE FROM session WHERE token = $1;", [
            token,
        ]);
        res.sendStatus(200);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { signUp, signIn, signOut };
