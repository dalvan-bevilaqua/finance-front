import React, { Component } from 'react';
import { despesaService } from "../service/DespesaService";
import Button from 'react-bootstrap/Button'
import DataTable from 'react-data-table-component';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moment from 'moment';


class Despesa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    name: 'Descricao',
                    selector: row => row.descricao,
                    sortable: true,
                },
                {
                    name: 'Valor',
                    selector: row => row.valor,
                    sortable: true,
                },
                {
                    name: 'Vencimento',
                    selector: row => moment(row.dtDespesa).format('YYYY/MM/DD'),
                    sortable: true,
                }],
            data: []
        };
    }

    render() {
        return <>
            <h4>Despesas</h4>
            {`${this.props.referencia.mes}/${this.props.referencia.ano}`}
            <Row >
                <Button
                    variant="primary"
                    onClick={this.getDespesa}
                >
                    Go
                </Button>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        columns={this.state.columns}
                        data={this.state.data}
                    />
                </Col>

            </Row>

        </>;
    }

    getDespesa = () => {
        despesaService.getDespesa().then(res => {
            console.log('Res', res.data)
            this.setState({
                data: res.data
            })
        });
    }

};

export default Despesa;