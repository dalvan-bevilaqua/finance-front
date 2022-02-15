export const numberFormat = (value) =>
    new Intl.NumberFormat('pt-IN', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);