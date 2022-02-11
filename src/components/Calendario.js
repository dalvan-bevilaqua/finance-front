import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import React from 'react';
import Col from 'react-bootstrap/Col'
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const calendario = {
    marginTop: '10px',
    alignItems: 'center',
    textAlign: 'center',
};

class Calendario extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            meses: [
                { cod: 0, descricao: 'Janeiro' },
                { cod: 1, descricao: 'Fevereiro' },
                { cod: 2, descricao: 'Março' },
                { cod: 3, descricao: 'Abril' },
                { cod: 4, descricao: 'Mario' },
                { cod: 5, descricao: 'Junho' },
                { cod: 6, descricao: 'Julho' },
                { cod: 7, descricao: 'Agosto' },
                { cod: 8, descricao: 'Setembro' },
                { cod: 9, descricao: 'Outubro' },
                { cod: 10, descricao: 'Novembro' },
                { cod: 11, descricao: 'Dezembro' }
            ],
            ano: props.referencia.ano,
            mes: props.referencia.mes
        };
    }

    nextMonth = () => {
        var mes = this.state.mes;
        var ano = this.state.ano;
        mes = mes + 1;

        if (mes === 12) {
            mes = 0;
            ano = ano + 1;
        }

        this.setState({
            mes: mes,
            ano: ano
        });

        this.props.onHanldeReferencia({ mes: mes, ano: ano });

    }

    backMonth = () => {
        var mes = this.state.mes;
        var ano = this.state.ano;
        mes = mes - 1;

        if (mes === -1) {
            mes = 11;
            ano = ano - 1;
        }

        this.setState({
            mes: mes,
            ano: ano
        });

        this.props.onHanldeReferencia({ mes: mes, ano: ano });
    }


    render() {
        return (
            <div style={calendario}>
                <Row className="justify-content-md-center">
                    <Col xs lg="1">
                        <Button variant="light" onClick={this.backMonth}>
                            <BsFillArrowLeftCircleFill />
                        </Button>
                    </Col>
                    <Col xs lg="1">
                        <h4>{`${this.state.meses[this.state.mes].descricao}/${this.state.ano}`}</h4>
                    </Col>
                    <Col xs lg="1">
                        <Button variant="light" onClick={this.nextMonth}>
                            <BsFillArrowRightCircleFill />
                        </Button>
                    </Col>
                </Row>
            </ div>
        );
    }
};

export default Calendario;

