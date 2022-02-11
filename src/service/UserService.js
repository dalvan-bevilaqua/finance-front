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
    var url = process.env.REACT_APP_API_URL + 'api/v1/usuario/autenticar'
    console.log(url);
    await axios.post(url, {}, {
        headers
    }).then(res => {
        console.log(res.data)
        return res.data
    })
}