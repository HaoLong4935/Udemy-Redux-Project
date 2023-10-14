import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
const Header = (props) => {
    const listUser = useSelector((state) => state.user.listUsers)

    return (
        <>
            <Navbar expand="lg" bg="light" data-bs-theme="dark" >
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown style={{ marginLeft: "20px" }}
                                title={`(${listUser.length}) Users`} id="basic-nav-dropdown">
                                {listUser.map((user, index) => {
                                    return (
                                        <NavDropdown.Item href="#" key={`user-${index}`}>{user.username}</NavDropdown.Item>
                                    )
                                })}
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
export default Header