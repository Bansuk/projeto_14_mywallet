import bcrypt from "bcrypt";
import connection from "../../database/database.js";
import { accountSchema } from "../../validation/account.js";

const signUp = async (req, res) => {
    const { name, email, password } = req.body;

    if (accountSchema.validate({ name, email, password }).error)
        return res.sendStatus(400);

    try {
        const result = await connection.query(
            "SELECT * FROM account WHERE email = $1",
            [email]
        );

        if (result.rowCount) return res.sendStatus(409);

        const passwordHash = bcrypt.hashSync(password, 10);

        await connection.query(
            "INSERT INTO account(name, email, password) VALUES ($1, $2, $3)",
            [name, email, passwordHash]
        );

        res.sendStatus(201);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { signUp };
