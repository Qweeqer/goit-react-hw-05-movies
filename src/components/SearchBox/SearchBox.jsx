import PropTypes from 'prop-types';

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

SearchBox.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};

export default SearchBox;
