import axios from 'axios';
import { CookieService } from './CookieService';

export const despesaService = {
    getDespesa,
    saveDespesa
};

async function getDespesa() {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa/buscar'
    const res = await axios.get(url, { headers: headers });
    return res;
}

async function saveDespesa(despesa) {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa'
    const res = await axios.post(url, despesa, { headers: headers });
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
