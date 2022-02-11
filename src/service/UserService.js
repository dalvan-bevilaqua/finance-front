import axios from 'axios';

export const userService = {
    login,

};

async function login(username, password) {

    const headers = {
        headers: { 'Content-Type': 'application/json' },
        Authorization: 'Basic ' + btoa(username + ':' + password)
    };

    console.log(headers);

    await axios.post(`/api/v1/usuario/autenticar`, {}, {
        headers
    }).then(res => {
        console.log(res.data)
        return res.data
    })
}