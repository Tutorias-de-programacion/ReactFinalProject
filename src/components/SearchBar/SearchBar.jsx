import Form from "react-bootstrap/Form";
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
    return (
        <Form className="d-flex">
            <Button variant="dark" className="txtColor"><AiOutlineSearch /></Button>
                <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 form-field"
                aria-label="Search"
                />
            <Button variant="dark" className="txtColor"><AiFillStar className="navText" /></Button>            
        </Form>
    );
}
 
export default SearchBar;