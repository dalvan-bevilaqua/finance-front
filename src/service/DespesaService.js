import axios from 'axios';
import { CookieService } from './CookieService';

export const despesaService = {
    getDespesa,
    saveDespesa,
    deletar
};

async function getDespesa(filter) {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa/buscar'
    const res = await axios.post(url, filter, { headers: headers });
    return res;
}

async function saveDespesa(despesa) {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa'
    const res = await axios.post(url, despesa, { headers: headers });
    return res;
}

async function deletar(id) {

    const headers = await getHeader();

    var url = process.env.REACT_APP_API_URL + 'api/v1/despesa/' + id;
    const res = await axios.delete(url, { headers: headers });
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
