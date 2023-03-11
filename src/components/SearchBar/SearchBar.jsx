import Form from "react-bootstrap/Form";
import { AiOutlineSearch } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import "./SearchBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";


/*You all that you need to do is to redirect to SearchPage
You should include the query on the search like this /search/El padrino 17
remember to use redirect("/search/${yourQuery}")
Ref: https://reactrouter.com/en/main/fetch/redirect
*/

const SearchBar = () => {
  const [currentSearch, setCurrentSearch] = useState("");

  function handleCLick() {
    console.log("its happening");
    redirect(`search/${currentSearch}`);
  }

  return (
    <Form className="d-flex">
    <Link to={`/search/${currentSearch}`}>
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
        onChange={({ target }) => {
          setCurrentSearch(target.value);
          console.log(currentSearch);
        }}
      />

    </Form>
  );
};

export default SearchBar;
