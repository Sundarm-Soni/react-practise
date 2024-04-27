const SearchBar = ({ searchValue, setSearchValue }) => {

  const handleOnSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  return (
    <div>
      <input
        placeholder="Search Products ..."
        value={searchValue}
        className="search-bar"
        onChange={handleOnSearchChange}
        name="search"
      />
    </div>
  );
};

export default SearchBar;
