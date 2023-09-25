import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbars mb-3">
          <Container>
            <Navbar.Brand href="#" className='color'>
              <h1> <span className='word'>M</span>ovie App</h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start" className='backcolor'
            >
              <Offcanvas.Header closeButton className='off'>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='color fs-1'>
                  <span className='word'>M</span>ovie App
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5">
                  <Nav.Link href="#" className='fw-bold fs-5 color mx-lg-5'>
                    <Link to={'/'}>
                      <span className='word'>H</span>ome
                    </Link>
                  </Nav.Link>
                  <Nav.Link href="#" className='fw-bold color fs-5 me-5'>
                    <Link to={'wachlist'}>
                      <span className='word'>w</span>achlist
                    </Link>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;