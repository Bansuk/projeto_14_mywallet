import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button } from "./Styles";
import { signUpUser } from "../../Services/api.services";

const SignUp = ({ setUser }) => {
    const history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    const signIn = e => {
        e.preventDefault();

        if (password !== passwordConfirmation) {
            alert("");
            return;
        }

        const body = {
            name,
            email,
            password,
        };

        signUpUser(body)
            .then(res => {
                history.push("/");
            })
            .catch(err => {
                alert("Erro");
            });
    };

    return (
        <Container>
            <h1>MyWallet</h1>
            <Form onSubmit={signIn}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={passwordConfirmation}
                    onChange={e => setPasswordConfirmation(e.target.value)}
                    required
                />
                <Button>Cadastrar</Button>
            </Form>
            <Link to={"/"}>Já tem uma conta? Entre agora!</Link>
        </Container>
    );
};

export default SignUp;
