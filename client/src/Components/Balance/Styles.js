import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Body = styled.div`
    width: 90vw;
    max-width: 500px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 700;
    font-size: 26px;
    margin-top: 25px;
`;

const Display = styled.div`
    background-color: #fff;
    width: 90vw;
    max-width: 500px;
    margin-top: 22px;
    height: 65vh;
    border-radius: 5px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    & .transaction__message {
        color: #868686;
        font-size: 20px;
    }
`;

const Buttons = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 15px;
`;

const Button = styled.button`
    background-color: #a328d6;
    border-radius: 5px;
    width: 156px;
    height: 114px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 17px;
    padding: 10px;
    text-align: left;

    & .button__icon {
        font-size: 22px;
    }
`;

const Transactions = styled.div`
    width: 90%;
    height: 85%;
    display: flex;
    flex-direction: column;
    align-items: none;
    justify-content: start;
    margin-top: -50px;
    position: relative;
`;

const Total = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 380px;
    font-size: 17px;
    position: fixed;

    & .balance__total {
        color: #000;
        font-weight: 700;
    }

    & .balance__value--pos {
        color: #03ac00;
        margin-left: 180px;
    }

    & .balance__value--neg {
        color: #c70000;
        margin-left: 180px;
    }
`;

export {
    Container,
    Body,
    Header,
    Display,
    Buttons,
    Button,
    Transactions,
    Total,
};
