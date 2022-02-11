import axios from 'axios';
import { CookieService } from './CookieService';

export const userService = {
    login,
};

async function login(username, password) {

    await CookieService.setUserInCookie(username, password)
    const headers = await getHeader();
    var url = process.env.REACT_APP_API_URL + 'api/v1/usuario/autenticar'

    console.log(url);
    await axios.post(url, {}, { headers })
        .then(res => {

            console.log(res.data)
            return res.data
        })
}

async function getHeader() {
    var authorization = await CookieService.getUserOfCookie()
    return {
        headers: {
            'Content-Type': 'application/json'
        },
        Authorization: authorization
    };
}