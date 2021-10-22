import connection from "../../database/database.js";

const getTransactions = async (req, res) => {
    try {
        const result = await connection.query("SELECT * FROM transaction;");
        res.send(result.rows);
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

const postTransaction = async (req, res) => {
    const { date, description, value, account_id } = req.body;

    try {
        await connection.query(
            "INSERT INTO transaction (date, description, value, account_id) VALUES ($1, $2, $3, $4);",
            [date, description, value, account_id]
        );
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
};

export { getTransactions, postTransaction };
