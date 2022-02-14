import axios from 'axios';
import { CookieService } from './CookieService';

export const userService = {
    login,
    validaLogin,
    logout
};

async function login(username, password) {

    await CookieService.setUserInCookie(username, password)
    const headers = await getHeader();
    var url = process.env.REACT_APP_API_URL + 'api/v1/usuario/autenticar'
    console.log(url);

    try {
        let res = await axios.post(url, {}, { headers })
        return res.data;
    } catch (e) {
        return false;
    }
}

async function validaLogin() {
    const headers = await getHeader();
    var url = process.env.REACT_APP_API_URL + 'api/v1/usuario/autenticar'
    let res = await axios.post(url, {}, { headers })
    if (res.data === 'autenticado') {
        return true;
    }
    return false;
}

async function logout() {
    await CookieService.logout();
    return false;
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