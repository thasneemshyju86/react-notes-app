import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchText }) => {
  return (
    <div className="search">
      <MdSearch className="search-icons" size="1.3em" />
      <input
        type="text"
        onChange={(e) => handleSearchText(e.target.value)}
        placeholder="type to search..."
      />
    </div>
  );
};
export default Search;
