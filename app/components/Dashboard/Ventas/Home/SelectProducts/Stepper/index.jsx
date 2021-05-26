import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Stepper = ({ currentStep, stepsList, setCurrentStep }) => (
  <div className={styles.stepsList}>
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

    <div className={styles.stepsList__actions}>
      <button
        type="button"
        onClick={() => {
          setCurrentStep((prevState) => prevState - 1);
        }}
        disabled={currentStep === 0}
      >
        {'<'} Anterior
      </button>
      <h2 className={styles.stepsList__title}>{stepsList[currentStep]}</h2>
      <button
        type="button"
        onClick={() => {
          setCurrentStep((prevState) => prevState + 1);
        }}
        disabled={stepsList.length === currentStep + 1}
      >
        Siguiente {'>'}
      </button>
    </div>
  </div>
);

Stepper.propTypes = {
  currentStep: PropTypes.number.isRequired,
  setCurrentStep: PropTypes.func.isRequired,
  stepsList: PropTypes.oneOfType([PropTypes.array.isRequired]).isRequired,
};

export default Stepper;
