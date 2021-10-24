import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h1 {
        font-size: 32px;
        font-family: "Saira Stencil One", cursive;
        margin: 160px 0 25px 0;
    }

    & a {
        font-size: 15px;
        font-weight: 700;
        margin-top: 35px;
    }
`;

const Form = styled.form`
    display: inherit;
    flex-direction: inherit;
    justify-content: inherit;
    margin-bottom: 15px;
    width: 90vw;
    max-width: 500px;

    & input {
        border: none;
        border-radius: 5px;
        height: 60px;
        margin-bottom: 13px;
    }

    & input::placeholder {
        color: #000;
        font-size: 20px;
        padding-left: 15px;
    }
`;

const Button = styled.button`
    background-color: #a328d6;
    border-radius: 5px;
    font-weight: 700;
    height: 50px;
`;

export { Container, Form, Button };
