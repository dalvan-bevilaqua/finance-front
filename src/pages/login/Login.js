import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Login.css';
import { userService } from "../../service/UserService";
import { toast } from 'react-toastify';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = { usuario: '', senha: '' }
    }

    handleChange = (event) => {
        var stateObject = function () {
            let returnObj = {};
            returnObj[this.target.name] = this.target.value;
            return returnObj;
        }.bind(event)();
        this.setState(stateObject);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        userService.login(this.state.usuario, this.state.senha).then(res => {

            if (res === 'autenticado') {
                this.props.onHandleLoginActive(true);
                return;
            }

            toast.error("Não foi possível efetuar o Login");

        })
    }

    render() {
        return <>
            <div className='loginContainer'>
                <div className='carLogin'>
                    <h2>Finance</h2>
                    <Form className='rounded p-4 p-sm-3 formLogin' onSubmit={this.handleSubmit} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Usuário</Form.Label>
                            <Form.Control type="text" placeholder="Digite o usuário" name="usuario" value={this.state.usuario} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Senha</Form.Label>
                            <Form.Control type="password" placeholder="Senha" name="senha" value={this.state.senha} onChange={this.handleChange} />
                        </Form.Group>

                        <Button variant="success" type="submit">
                            Entrar
                        </Button>

                    </Form>
                </div>
            </div>
        </>
    }
}

export default Login;