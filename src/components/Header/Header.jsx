import { Link /*Or NavLink */ } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";

//Please use <Link> or <NavLink> instead of <a> for more information:
//Link https://reactrouter.com/en/main/components/link
//NavLink https://reactrouter.com/en/main/components/nav-link

const Header = () => {
  return (
    <Navbar className="navBg" expand="lg">
      <Container fluid>
        <Navbar.Brand className="navText" href="#">Reactflix</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <SearchBar />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
