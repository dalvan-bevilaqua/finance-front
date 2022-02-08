import Nav from 'react-bootstrap/Nav'
const Footer = () => {
    return <>
        <Nav className="justify-content-left" activeKey="/">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/despesas">Despesas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/investimentos">Investimentos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/previsao">Previsao</Nav.Link>
            </Nav.Item>
        </Nav>
    </>;
};

export default Footer;