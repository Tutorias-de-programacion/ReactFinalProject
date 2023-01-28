import Form from "react-bootstrap/Form";
import { AiOutlineSearch, AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import searchMovie from "../../hooks/searchMovie"; //This hook allow you to search the movie

/*You all that you need to do is to redirect to SearchPage
You should include the query on the search like this /search/El padrino 17
remember to use redirect("/search/${yourQuery}")
Ref: https://reactrouter.com/en/main/fetch/redirect
*/

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

