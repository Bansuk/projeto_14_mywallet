import { useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button } from "./Styles";
import { postTransaction } from "../Services/api.services";
import { useContext } from "react";
import UserContext from "../Contexts/UserContext";

const NewTransaction = props => {
    const history = useHistory();
    const [description, setDescription] = useState("");
    const [value, setValue] = useState("");
    const { name, token } = useContext(UserContext);
    const { type } = props.location.state;

    const postNewTransaction = e => {
        e.preventDefault();

        const body = {
            description,
            value,
        };

        postTransaction(body, token)
            .then(res => {
                history.push("/balanco");
            })
            .catch(err => {
                alert("Erro");
            });
    };

    return (
        <Container>
            <h1>Nova {type}</h1>
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
        </Container>
    );
};

export default NewTransaction;
