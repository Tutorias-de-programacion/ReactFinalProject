import Form from "react-bootstrap/Form";
import { useNavigate} from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ButtonFavorite from "../ButtonFavorite/ButtonFavorite";


/*You all that you need to do is to redirect to SearchPage
You should include the query on the search like this /search/El padrino 17
remember to use redirect("/search/${yourQuery}")
Ref: https://reactrouter.com/en/main/fetch/redirect
*/

const SearchBar = () => {
  const [currentSearch, setCurrentSearch] = useState("");

  function handleChange({ target }){
      setCurrentSearch(target.value);
  }

  function handleCLick() {
    setCurrentSearch("")
  }

  const navigate = useNavigate();

  function submitFind(e){
    e.preventDefault()
    navigate(`search/${currentSearch}/page/1`);
    setCurrentSearch("")
  }

  return (
    <Form className="d-flex" onSubmit={submitFind}>
    <Link to={`/search/${currentSearch}/page/1`}>
      <Button variant="dark" className="txtColor" onClick={handleCLick}>
        <AiOutlineSearch />
      </Button>
    </Link>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2 form-field"
        aria-label="Search"
        value={currentSearch}
        onChange={handleChange}
      />
    </Form>
  );
};

export default SearchBar;
