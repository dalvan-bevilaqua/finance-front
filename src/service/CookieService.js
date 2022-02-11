
import Cookies from 'universal-cookie';
import { decode as base64_decode, encode as base64_encode } from 'base-64';

export const CookieService = {
    setUserInCookie,
    getUserOfCookie,
    getBasic
};

async function setUserInCookie(user, password) {
    const cookies = new Cookies();
    let encoded = base64_encode(user + '|' + password);
    cookies.set('session', encoded, { path: '/' });
}

async function getUserOfCookie(user, password) {
    const cookies = new Cookies();
    let token = cookies.get('session');
    let decoded = base64_decode(token);
    let value = decoded.split("|")

    return 'Basic ' + base64_encode(value[0] + ':' + value[1]);
}

async function getBasic(user, password) {
    return 'Basic ' + base64_encode(user + ':' + password)
}