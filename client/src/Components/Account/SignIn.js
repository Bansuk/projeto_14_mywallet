import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import { Container, Form, Button } from "./Styles";
import { signInUser } from "../../Services/api.services";

const SignIn = ({ setUser }) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = e => {
        e.preventDefault();

        const body = {
            email,
            password,
        };

        signInUser(body)
            .then(res => {
                setUser(res.data);
                history.push("/balanco");
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
                <Button>Entrar</Button>
            </Form>
            <Link to={"/cadastro"}>Primeira vez? Cadastre-se!</Link>
        </Container>
    );
};

export default SignIn;
