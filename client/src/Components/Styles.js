import styled from "styled-components";

const Container = styled.div`
    & h1 {
        font-size: 27px;
        font-weight: 700;
        margin: 25px 0 40px 20px;
    }
`;

const Body = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
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
    font-size: 20px;
`;

export { Container, Body, Form, Button };
