import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Search = ({ onSearch }) => {
  const handleSearchProduct = (e) => {
    onSearch(e.target.value);
  };
  return (
    <div className={styles.search}>
      <label htmlFor="searchProducts">
        <input
          type="text"
          onChange={handleSearchProduct}
          name="searchProducts"
          id="searchProducts"
          placeholder="Buscar un producto"
        />
      </label>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Search;
