const SearchBox = ({ value, onSubmit, onChange }) => {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="inputSearchBox"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button className="btnSearchBox" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBox;
