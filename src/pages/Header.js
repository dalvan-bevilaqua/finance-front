import React from 'react';
import {
    Nav,
    NavMenu,
    NavLink
} from './NavbarElements';

const Header = () => {
    return <div >
        <Nav>
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
        </Nav>
    </ div>;
};


export default Header;