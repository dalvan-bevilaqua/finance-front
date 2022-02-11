import axios from 'axios';
import { CookieService } from './CookieService';

export const despesaService = {
    getDespesa,
};

async function getDespesa() {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa/buscar'
    console.log(url);
    const res = await axios.get(url, { headers: headers });
    return res;
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
