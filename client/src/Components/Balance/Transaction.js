import styled from "styled-components";

const Transaction = ({ date, description, value }) => {
    let isValuePositive = true;
    value = value.replace(".", ",");
    const newValue = value.replace("-", "");
    if (newValue !== value) isValuePositive = false;
    const formattedDate = new Date(date);

    return (
        <TransactionStyle>
            <div>
                <span className={"transaction__date"}>
                    {formattedDate.getDate() +
                        "/" +
                        (formattedDate.getMonth() + 1)}
                </span>
                <span className={"transaction__description"}>
                    {description}
                </span>
            </div>
            <div
                className={
                    //O props do styled component estava dando erro
                    isValuePositive
                        ? "transaction__value--pos"
                        : "transaction__value--neg"
                }
            >
                {newValue}
            </div>
        </TransactionStyle>
    );
};

export default Transaction;

const TransactionStyle = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 25px;

    & span {
        font-size: 16px;
    }

    & .transaction__date {
        color: #c6c6c6;
    }

    & .transaction__description {
        color: #000;
        margin-left: 10px;
    }

    & .transaction__value--neg {
        color: #c70000;
    }

    & .transaction__value--pos {
        color: #03ac00;
    }
`;
