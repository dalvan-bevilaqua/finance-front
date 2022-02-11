import axios from 'axios';

export const despesaService = {
    getDespesa,

};

async function getDespesa() {
    const res = await axios.get(`v1/despesa/buscar`);
    return res;
}