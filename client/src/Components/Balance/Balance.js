import UserContext from "../../Contexts/UserContext";
import { useContext, useEffect, useState } from "react";
import {
    getTransactions,
    signOutUser,
    getBalance,
} from "../../Services/api.services";
import {
    Container,
    Body,
    Header,
    Display,
    Buttons,
    Button,
    Transactions,
    Total,
} from "./Styles";
import { FaSignOutAlt } from "react-icons/fa";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import Transaction from "./Transaction";

const Balance = ({ setUser }) => {
    const { name, token } = useContext(UserContext);
    const [transactions, setTransactions] = useState([]);
    const [balance, setBalance] = useState(0);
    const history = useHistory();
    let isValuePositive = false;
    if (balance >= 0) isValuePositive = true;

    useEffect(() => {
        getTransactions(token)
            .then(res => setTransactions(res.data))
            .catch(err => alert("Erro ao obter as transações!"));
        getBalance(token)
            .then(res => setBalance(res.data))
            .catch(err => alert("Erro ao obter o saldo!"));
    });

    return (
        <Container>
            <Body>
                <Header>
                    <h1>Olá, {name}</h1>
                    <FaSignOutAlt
                        onClick={() => {
                            signOutUser(token);
                            setUser(null);
                            history.push("/");
                        }}
                    />
                </Header>
                <Display>
                    {transactions ? (
                        <Transactions>
                            {transactions.map(transaction => (
                                <Transaction
                                    key={transaction.transaction_id}
                                    date={transaction.date}
                                    description={transaction.description}
                                    value={transaction.value}
                                />
                            ))}
                            <Total>
                                <div className={"balance__total"}>SALDO</div>
                                <div
                                    className={
                                        isValuePositive
                                            ? "balance__value--pos"
                                            : "balance__value--neg"
                                    }
                                >
                                    {balance.toFixed(2)}
                                </div>
                            </Total>
                        </Transactions>
                    ) : (
                        <span className={"transaction__message"}>
                            Não há registros de entrada ou saída
                        </span>
                    )}
                </Display>
                <Buttons>
                    <Link
                        to={{
                            pathname: "/transacao",
                            state: { type: "entrada" },
                        }}
                    >
                        <Button>
                            <AiOutlinePlusCircle className={"button__icon"} />
                            <span>
                                Nova <br />
                                entrada
                            </span>
                        </Button>
                    </Link>
                    <Link
                        to={{
                            pathname: "/transacao",
                            state: { type: "saída" },
                        }}
                    >
                        <Button>
                            <AiOutlineMinusCircle className={"button__icon"} />
                            <span>
                                Nova <br />
                                saída
                            </span>
                        </Button>
                    </Link>
                </Buttons>
            </Body>
        </Container>
    );
};

export default Balance;
