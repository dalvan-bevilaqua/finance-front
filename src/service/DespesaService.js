import axios from 'axios';

export const despesaService = {
    getDespesa,

};

async function getDespesa() {
    const res = await axios.get(`https://bd-finance-api.herokuapp.com/api/v1/despesa/buscar`);
    return res;
}