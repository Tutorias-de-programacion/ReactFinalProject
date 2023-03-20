import Form from "react-bootstrap/Form";
import { useNavigate} from 'react-router-dom';
import { AiOutlineSearch} from "react-icons/ai";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
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

  const navigate = useNavigate();

  function submitFind(e){
    e.preventDefault()
    if (currentSearch != ""){
      navigate(`search/${currentSearch}/page/1`);
    setCurrentSearch("") 
    } else{
      alert("please write which movie you want to search")
    }
    
  }

  return (
    <Form className="d-flex" onSubmit={submitFind}>
      <Button variant="dark" className="txtColor" onClick={submitFind}>
        <AiOutlineSearch />
      </Button>
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
