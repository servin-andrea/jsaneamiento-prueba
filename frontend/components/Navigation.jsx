import Link from "next/link";
import { Navbar, Container, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="light" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link href="/">Navbar</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link href="/home">
              Home
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
