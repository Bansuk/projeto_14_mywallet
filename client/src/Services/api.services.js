import axios from "axios";

const URL = "http://localhost:4000/";

const config = token => {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
};

const signInUser = user => {
    return axios.post(`${URL}signin`, user);
};

const signUpUser = user => {
    return axios.post(`${URL}signup`, user);
};

const signOutUser = token => {
    return axios.delete(`${URL}signout`, config(token));
};

const getTransactions = token => {
    return axios.get(`${URL}transactions`, config(token));
};

const getBalance = token => {
    return axios.get(`${URL}balance`, config(token));
};

const postTransaction = (body, token) => {
    return axios.post(`${URL}transaction`, body, config(token));
};

export {
    signInUser,
    signUpUser,
    signOutUser,
    getTransactions,
    getBalance,
    postTransaction,
};
