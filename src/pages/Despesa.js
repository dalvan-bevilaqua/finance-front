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
import { BsFillTrashFill, BsCalendarPlus, BsCheck2All } from "react-icons/bs";
import { toast } from 'react-toastify';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Tooltip from 'react-bootstrap/Tooltip'
import { numberFormat } from '../utils/NumberFormat';

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
                    selector: row => numberFormat(row.valor),
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
                            <OverlayTrigger overlay={<Tooltip id="excluir">Excluir</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button variant="outline-danger" size="sm" style={{ marginRight: '5px' }} onClick={e => this.deletarDespesa(row.id)} ><BsFillTrashFill /></Button>
                                </span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="excluir">Copiar</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button variant="outline-secondary" size="sm" style={{ marginRight: '5px' }} onClick={e => this.copiarDespesa(row.id)} ><BsCalendarPlus /></Button>
                                </span>
                            </OverlayTrigger>
                            <OverlayTrigger overlay={<Tooltip id="excluir">Pagar</Tooltip>}>
                                <span className="d-inline-block">
                                    <Button variant="outline-success" size="sm" onClick={e => this.copiarDespesa(row.id)} ><BsCheck2All /></Button>
                                </span>
                            </OverlayTrigger>
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
            grupo: '',
            referencia: props.referencia

        };
    }

    componentDidMount() {
        this.getDespesa();
    }

    componentWillReceiveProps(props) {
        console.log(props)
        this.setState({
            referencia: props.referencia
        }, () => {
            console.log(this.state)
            this.getDespesa();
        })

    }

    showAndCloseModalDespesa = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    getDespesa = () => {
        let filter = { mes: this.state.referencia.mes, ano: this.state.referencia.ano }
        despesaService.getDespesa(filter).then(res => {
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

    deletarDespesa = (id) => {
        despesaService.deletar(id).then(resp => {
            this.getDespesa();
        });
    }

    copiarDespesa = () => {
        toast.info("Processo de replicação de despesa ainda não disponível");
    }

    handleChange = (event) => {
        var stateObject = function () {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;

        }.bind(event)();

        this.setState(stateObject);
    }

    selectAllColuns = (event) => {
        console.log(event)
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
                    <Button variant="outline-secondary" onClick={this.showAndCloseModalDespesa} style={{ marginRight: '5px' }}>Adicionar</Button>
                    <Button variant="outline-secondary" onClick={this.showAndCloseModalDespesa} style={{ marginRight: '5px' }}>Agrupar</Button>
                    <Button variant="outline-secondary" onClick={this.showAndCloseModalDespesa} style={{ marginRight: '5px' }}>Copiar para</Button>
                    <Button variant="outline-secondary" onClick={this.showAndCloseModalDespesa} style={{ marginRight: '5px' }}>Sobrescrever</Button>
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
                        selectableRows
                        onSelectedRowsChange={this.selectAllColuns}

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