import React from 'react';

class Home extends React.Component {
    render() {
        return <>
            <p>Home</p>
            {`${this.props.referencia.mes}/${this.props.referencia.ano}`}

        </>;
    }
};

export default Home;