import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Stepper = ({ className, currentStep, stepsList, setCurrentStep }) => (
  <div className={`${className} ${styles.stepsList}`}>
    <button
      type="button"
      onClick={() => {
        setCurrentStep((prevState) => prevState - 1);
      }}
      disabled={currentStep === 0}
    >
      <span>
        <i className="fas fa-chevron-left"></i>{' '}
      </span>

      <span className={styles.button__text}>Anterior</span>
    </button>

    <ol className={styles.stepsList__grid}>
      {stepsList.map((step, index) => (
        <li
          key={step}
          className={`${styles.stepItem} ${
            currentStep >= index && styles.stepItem__active
          }`}
        >
          {index + 1}
        </li>
      ))}
    </ol>

    <button
      type="button"
      onClick={() => {
        setCurrentStep((prevState) => prevState + 1);
      }}
      disabled={stepsList.length === currentStep + 1}
    >
      <span className={styles.button__text}>Siguiente</span>
      <span>
        {' '}
        <i className="fas fa-chevron-right"></i>
      </span>
    </button>
  </div>
);

Stepper.propTypes = {
  className: PropTypes.string.isRequired,
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  stepsList: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
};

export default Stepper;
