import { Route, Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container'

import Home from './pages/Home';
import Investimento from './pages/Investimento';
import Despesa from './pages/Despesa';
import Previsao from './pages/Previsao';

import Footer from './pages/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Container fluid>
      <Footer />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/investimentos' element={<Investimento />} />
        <Route path='/Despesas' element={<Despesa />} />
        <Route path='/Previsao' element={<Previsao />} />
      </Routes>
    </Container>
  );
}
export default App;