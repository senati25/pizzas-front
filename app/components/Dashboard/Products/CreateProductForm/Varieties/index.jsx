import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const VarietyItem = ({ variety, index, handleRemoveVariety }) => (
  <>
    <span>{variety.denominacion} </span>
    <span>{variety.precio} </span>
    <button
      type="button"
      onClick={() => {
        handleRemoveVariety(index);
      }}
    >
      -
    </button>
  </>
);

VarietyItem.propTypes = {
  variety: PropTypes.objectOf(
    PropTypes.shape({
      denominacion: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
  index: PropTypes.func.isRequired,
  handleRemoveVariety: PropTypes.func.isRequired,
};

const Varieties = ({ varieties, setVarieties }) => {
  const [values, setValues] = useState({});

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleAddVariety = () => {
    setVarieties([...varieties, values]);
  };

  const handleRemoveVariety = (index) => {
    varieties.splice(index, 1);
    setVarieties([...varieties]);
  };

  return (
    <fieldset className={styles.variety}>
      <legend>Variedades</legend>

      <div className={styles.variety__add}>
        <div>Denominacion</div>
        <div>Precio</div>
        <div></div>
      </div>

      <div className={styles.variety__add}>
        <input
          onChange={handleOnChange}
          type="text"
          name="denominacion"
          id="denominacion"
        />

        <input
          onChange={handleOnChange}
          type="number"
          name="precio"
          id="precio"
        />

        <button onClick={handleAddVariety} type="button">
          +
        </button>
      </div>
      <div className={styles.variety__grid}>
        {varieties.length !== 0 &&
          varieties.map((variety, index) => (
            <VarietyItem
              key={variety.denominacion}
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
      price: PropTypes.string,
    })
  ),
  setVarieties: PropTypes.func.isRequired,
};

export default Varieties;
