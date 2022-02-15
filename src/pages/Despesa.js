import React, { Component } from 'react';
import { despesaService } from "../service/DespesaService";
import Button from 'react-bootstrap/Button'
import DataTable from 'react-data-table-component';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import moment from 'moment';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
//import DatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import MaskedFormControl from 'react-bootstrap-maskedinput'
import { BsFillTrashFill, BsFillCalendarPlusFill } from "react-icons/bs";
import { toast } from 'react-toastify';

class Despesa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    name: 'Linha',
                    selector: row => row.id,
                    sortable: true,
                    width: '5%',
                },
                {
                    name: 'Descricao',
                    selector: row => row.descricao,
                    sortable: true,
                },
                {
                    name: 'Valor',
                    selector: row => row.valor,
                    sortable: true,
                    width: '15%',
                },
                {
                    name: 'Vencimento',
                    selector: row => moment(row.dtDespesa).format('DD/MM/YYYY'),
                    sortable: true,
                    width: '15%',
                },
                {
                    name: 'Operação',
                    cell: row =>
                        <>
                            <Button variant="danger" size="sm" style={{ marginRight: '5px' }} ><BsFillTrashFill /></Button>
                            <Button variant="secondary" size="sm" ><BsFillCalendarPlusFill /></Button>
                        </>,
                    allowOverflow: true,
                    button: true,
                    width: '15%',
                }

            ],
            data: [],
            showModal: false,
            descricao: '',
            vencimento: '',
            valor: '',
            grupo: ''

        };
    }

    componentDidMount() {
        this.getDespesa();
    }

    showAndCloseModalDespesa = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    getDespesa = () => {
        despesaService.getDespesa().then(res => {
            this.setState({
                data: res.data
            })
            toast.success("Processo efetuado com sucesso");
        });
    }

    saveDespesa = () => {
        let vencimento = this.state.vencimento.split('/')
        vencimento = new Date(vencimento[2], vencimento[1] - 1, vencimento[0]);
        let despesa = {
            descricao: this.state.descricao,
            dtDespesa: vencimento,
            valor: this.state.valor,
            grupo: {
                id: this.state.grupo
            }
        }

        despesaService.saveDespesa(despesa).then(res => {
            this.showAndCloseModalDespesa();
            this.getDespesa();
        });
    }

    deletarDespesa = () => { }
    copiarDespesa = () => { }

    handleChange = (event) => {
        var stateObject = function () {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;

        }.bind(event)();

        this.setState(stateObject);
    }

    render() {
        //{`${this.props.referencia.mes}/${this.props.referencia.ano}`}
        return <>
            <Row >
                <Col className="d-flex justify-content-end">
                    <Button
                        variant="outline-secondary"
                        onClick={this.getDespesa}
                        style={{ marginRight: '5px' }}
                    >
                        Buscar
                    </Button>
                    <Button variant="outline-secondary" onClick={this.showAndCloseModalDespesa}>Adicionar</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DataTable
                        title="Dados das Despesas"
                        fixedHeader
                        columns={this.state.columns}
                        data={this.state.data}
                        //fixedHeaderScrollHeight="500px"
                        highlightOnHover
                        pointerOnHover
                        pagination

                    />
                </Col>


            </Row>

            <Modal size="lg" show={this.state.showModal} onHide={this.showAndCloseModalDespesa} >
                <Modal.Header closeButton>
                    <Modal.Title>Adicionar Despesa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <fieldset>
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="descricao">Descricao</Form.Label>
                                        <Form.Control name="descricao" value={this.state.descricao} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="valor">Valor</Form.Label>
                                        <Form.Control name="valor" value={this.state.valor} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label htmlFor="vencimento">Vencimento</Form.Label>
                                        <MaskedFormControl type='text' name='vencimento' mask='11/11/1111' value={this.state.vencimento} onChange={this.handleChange} />
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Grupo</Form.Label>
                                        <Form.Control
                                            as="select"
                                            custom
                                            name="grupo"
                                            onChange={this.handleChange}
                                        >   <option value="0">Selecione</option>
                                            <option value="1">Combustível</option>
                                            <option value="2">Pessoais</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </fieldset>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.showAndCloseModalDespesa} >
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={this.saveDespesa} >
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>;
    }

};

export default Despesa;