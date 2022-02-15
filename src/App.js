import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Home from './pages/Home';
import Investimento from './pages/Investimento';
import Despesa from './pages/Despesa';
import Previsao from './pages/Previsao';
import Login from './pages/login/Login'

import Header from './pages/Header';
import Calendario from './components/Calendario';
import { userService } from "./service/UserService";

import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grupo from './pages/Grupo';


const container = {
  marginLeft: '15%',
  width: '80%',
  backgroundColor: '#fbfbfb',
  marginTop: '10px',
  borderRadius: '20px',
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
  minHeight: '600px'
};


export default class App extends React.Component {

  componentDidMount() {
    this.validaLogin();
  }

  state = {
    mes: 0,
    ano: 2022,
    loginActive: false
  }

  handleReferencia = (value) => {
    this.setState({ mes: value.mes, ano: value.ano })
  }

  handleLoginActive = (value) => {
    this.setState({ loginActive: value })
  }

  validaLogin = () => {
    userService.validaLogin().then(res => {
      this.handleLoginActive(res);
    })
  }

  handleLogout = () => {
    userService.logout().then(res => {
      this.handleLoginActive(res);
      this.context.history.push('/');
    })
  }

  render() {
    if (this.state.loginActive) {
      return (
        <>
          <Header onHandleLogout={this.handleLogout} />
          <Calendario referencia={this.state} onHanldeReferencia={this.handleReferencia} />
          <Container fluid style={container}>
            <Routes>
              <Route path='/' element={<Home referencia={this.state} />} />
              <Route path='/investimentos' element={<Investimento referencia={this.state} />} />
              <Route path='/despesas' element={<Despesa referencia={this.state} />} />
              <Route path='/grupo' element={<Grupo referencia={this.state} />} />
              <Route path='/previsao' element={<Previsao referencia={this.state} />} />
            </Routes>
          </Container>
          <ToastContainer closeOnClick="true" hideProgressBar="true" />
        </>
      )
    } else {
      return (
        <>
          <Login loginActive={this.state.loginActive} onHandleLoginActive={this.handleLoginActive} />
          <ToastContainer closeOnClick="true" hideProgressBar="true" />
        </>
      )
    }
  }

}
