import styles from './styles.module.css';

const Search = ({ onSearch }) => {
  const handleSearchProduct = (e) => {
    onSearch(e.target.value);
  };
  return (
    <>
      <input
        className={styles.search}
        type="text"
        onChange={handleSearchProduct}
        name="searchProducts"
        id="searchProducts"
        placeholder="Buscar un producto"
      />
    </>
  );
};

export default Search;
