import axios from "axios";

const URL = "http://localhost:4000/";

function config(token) {
    return {
        headers: { Authorization: `Bearer ${token}` },
    };
}

const signInUser = user => {
    return axios.post(`${URL}signin`, user);
};

export { signInUser };
