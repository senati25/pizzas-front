import PropTypes from 'prop-types';
import useProductVariety from '../../../../hooks/useProductVariety';
import styles from './styles.module.css';

const VarietyItem = ({ variety, index, handleRemoveVariety }) => (
  <>
    <span title={variety.denominacion}>
      {index + 1}.{variety.denominacion}
    </span>
    <span className={styles.varietyItem__price}>
      {parseFloat(variety.precio, 10).toFixed(2)}
    </span>
    <button
      type="button"
      className={styles.variety__removeButton}
      onClick={() => {
        handleRemoveVariety(index);
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  </>
);

VarietyItem.propTypes = {
  variety: PropTypes.shape({
    denominacion: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  handleRemoveVariety: PropTypes.func.isRequired,
};

const Varieties = ({ varieties, setVarieties }) => {
  const {
    values,
    handleOnChange,
    handleAddVariety,
    handleRemoveVariety,
  } = useProductVariety(varieties, setVarieties);

  return (
    <fieldset className={styles.variety}>
      <legend>Variedades</legend>

      <div className={styles.variety__grid}>
        <label htmlFor="denominacion">
          Denominacion
          <input
            onChange={handleOnChange}
            value={values.denominacion}
            type="text"
            id="denominacion"
            name="denominacion"
          />
        </label>

        <label htmlFor="precio">
          Precio
          <input
            onChange={handleOnChange}
            className={styles.variety__price}
            value={values.precio}
            type="number"
            name="precio"
            id="precio"
          />
        </label>

        <button
          className={styles.variety__addButton}
          onClick={handleAddVariety}
          type="button"
        >
          <i className="fas fa-plus-circle"></i>
        </button>

        {varieties.length !== 0 &&
          varieties.map((variety, index) => (
            <VarietyItem
              key={variety.denominacion + new Date()}
              variety={variety}
              index={index}
              handleRemoveVariety={handleRemoveVariety}
            />
          ))}
      </div>
    </fieldset>
  );
};

Varieties.defaultProps = { varieties: [] };

Varieties.propTypes = {
  varieties: PropTypes.arrayOf(
    PropTypes.shape({
      denominacion: PropTypes.string,
      precio: PropTypes.number,
    })
  ),
  setVarieties: PropTypes.func.isRequired,
};

export default Varieties;
