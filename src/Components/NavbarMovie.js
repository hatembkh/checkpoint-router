import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavbarMovie = () => {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Movies Playlist</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
                    <Nav.Link as={Link} to={'/MovieList'}>Movies</Nav.Link>
                    <Nav.Link as={Link}to={'/Contact'}>Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavbarMovie;