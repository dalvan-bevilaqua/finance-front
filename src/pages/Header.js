import React from 'react';
import { Button } from 'react-bootstrap';
import {
    Nav,
    NavMenu,
    NavLink
} from './NavbarElements';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Header extends React.Component {
    onHandleLogout = () => {
        this.props.onHandleLogout();
    }

    render() {
        return (
            <Row>
                <Nav>
                    <Col>
                        <NavMenu>
                            <NavLink to='/' activeStyle>
                                Home
                            </NavLink>
                            <NavLink to='/despesas' activeStyle>
                                Despesas
                            </NavLink>
                            <NavLink to='/investimentos' activeStyle>
                                Investimentos
                            </NavLink>
                            <NavLink to='/previsao' activeStyle>
                                Previsão
                            </NavLink>
                        </NavMenu>
                    </Col>
                    <Col xs lg="2">
                        <Button variant="outline-light" onClick={this.onHandleLogout}>
                            Sair
                        </Button>
                    </Col>
                </Nav>
            </ Row>
        )
    }
};


export default Header;