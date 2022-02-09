import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Home from './pages/Home';
import Investimento from './pages/Investimento';
import Despesa from './pages/Despesa';
import Previsao from './pages/Previsao';

import Header from './pages/Header';
import Footer from './pages/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

const container = {
  marginLeft: '15%',
  width: '75%',
  backgroundColor: '#fbfbfb',
  marginTop: '10px',
  borderRadius: '20px',
  boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.1)',
  height: '550px'
};


function App() {
  return (
    <>
      <Header />
      <Container fluid style={container}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/investimentos' element={<Investimento />} />
          <Route path='/Despesas' element={<Despesa />} />
          <Route path='/Previsao' element={<Previsao />} />
        </Routes>
      </Container>
      <Footer />
    </>
  );
}
export default App;