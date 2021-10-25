import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button, Body } from "./Styles";
import { postTransaction } from "../Services/api.services";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const NewTransaction = props => {
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    let newValue;
    const { token } = useContext(UserContext);
    const { type } = props.location.state;

    const postNewTransaction = e => {
        e.preventDefault();

        type === "saída"
            ? (newValue = parseInt(value) * -1)
            : (newValue = parseInt(value));

        const body = {
            description,
            value: newValue,
        };

        postTransaction(body, token)
            .then(res => {
                history.push("/balanco");
            })
            .catch(err => {
                alert("Erro ao postar nova transacao!");
            });
    };

    return (
        <Container>
            <h1>Nova {type}</h1>
            <Body>
                <Form onSubmit={postNewTransaction}>
                    <input
                        type="number"
                        placeholder="Valor"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        required
                    />
                    <Button>Salvar {type}</Button>
                </Form>
            </Body>
        </Container>
    );
};

export default NewTransaction;
