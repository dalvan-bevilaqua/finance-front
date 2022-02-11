import React from 'react';

class Investimento extends React.Component {
    render() {
        return <>
            <p>Investimentos</p>
            {`${this.props.referencia.mes}/${this.props.referencia.ano}`}
        </>;
    }
};

export default Investimento;