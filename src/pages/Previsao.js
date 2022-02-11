import React from 'react';


class Previsao extends React.Component {
    render() {
        return <>
            <p>Previsão</p>
            {`${this.props.referencia.mes}/${this.props.referencia.ano}`}
        </>;
    }
};

export default Previsao;