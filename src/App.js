import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Home from './pages/Home';
import Investimento from './pages/Investimento';
import Despesa from './pages/Despesa';
import Previsao from './pages/Previsao';
import Authentication from './pages/Authentication';

import Header from './pages/Header';
import Calendario from './components/Calendario';


import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

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

  state = {
    mes: 8,
    ano: 2025
  }

  handleReferencia = (value) => {
    this.setState({ mes: value.mes, ano: value.ano })
  }

  render() {
    return (
      <>
        <Header />
        <Calendario referencia={this.state} onHanldeReferencia={this.handleReferencia} />
        <Container fluid style={container}>
          <Routes>
            <Route path='/' element={<Home referencia={this.state} />} />
            <Route path='/investimentos' element={<Investimento referencia={this.state} />} />
            <Route path='/despesas' element={<Despesa referencia={this.state} />} />
            <Route path='/previsao' element={<Previsao referencia={this.state} />} />
            <Route path='/autenticar' element={<Authentication />} />
          </Routes>
        </Container>

      </>
    );
  }
}