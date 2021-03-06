import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #11C76F;
height: 70px;
display: flex;
justify-content: space-between;
padding-left: 15%;
padding-top: 20px;
`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
	color: #fffa;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
font-size: 17px;
white-space: nowrap;
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #808080;
padding: 10px 22px;
color: white;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
margin-left: 24px;
&:hover {
	transition: all 0.2s ease-in-out;
	background: #fff !important;
	color: #fff !important;
}
`;
