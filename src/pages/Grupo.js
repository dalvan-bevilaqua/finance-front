import React from 'react';

class Grupo extends React.Component {
    render() {
        return <>
            <p>Grupo de Despesa</p>
            {`${this.props.referencia.mes}/${this.props.referencia.ano}`}

        </>;
    }
};

export default Grupo;