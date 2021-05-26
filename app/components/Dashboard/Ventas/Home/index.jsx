import { useState } from 'react';
import SelectProducts from './SelectProducts';
import Stepper from './SelectProducts/Stepper';
import styles from './styles.module.css';

const stepsList = ['Elegir Productos', 'Datos del Cliente', 'Confirmar orden'];

const Ventas = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className={styles.ventas}>
      <header className={styles.header}>
        {/* <div className={styles.background}></div> */}
        <h1 className={styles.title}>Nueva venta</h1>

        <Stepper
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          stepsList={stepsList}
        />
      </header>

      <SelectProducts
        className={`${styles.step} ${
          stepsList[currentStep] === stepsList[0] && styles.stepActive
        }`}
      />

      <div
        className={`${styles.step} ${
          stepsList[currentStep] === stepsList[1] && styles.stepActive
        }`}
      >
        Step 2
      </div>
      <div
        className={`${styles.step} ${
          stepsList[currentStep] === stepsList[2] && styles.stepActive
        }`}
      >
        Step 3
      </div>
    </div>
  );
};

export default Ventas;
