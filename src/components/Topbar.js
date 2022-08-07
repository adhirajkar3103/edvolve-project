import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import userImg from "../images/download.png";
import logo from "../images/logo.png";

const Topbar = ({ user }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Brand href="#">
          <Image style={{ maxHeight: "40px", maxWidth: "40px" }} src={logo} />
        </Navbar.Brand>

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto mx-2 mx-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Dashboard</Nav.Link>
            <Nav.Link href="#action2">Experience zone</Nav.Link>
            <Nav.Link href="#action2">Learning zone</Nav.Link>
          </Nav>
          <Form>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          <Button
            className="ms-auto d-md-inline-block"
            variant="dark"
            size="sm"
          >
            ▶ Discovery Zone
          </Button>
          <Image
            className="ms-2"
            style={{ maxHeight: "40px", maxWidth: "40px" }}
            src={userImg}
            roundedCircle
          />
          <p className="ms-1 mt-auto mb-auto">{user}</p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
