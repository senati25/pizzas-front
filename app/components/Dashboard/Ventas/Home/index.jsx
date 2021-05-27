import { useState } from 'react';
import ClientForm from './ClientForm';
import SelectProducts from './SelectProducts';
import Stepper from './SelectProducts/Stepper';
import { OrderStateProvider } from './shared/OrderContext';
import styles from './styles.module.css';

const stepsList = ['Elegir Productos', 'Datos del Cliente', 'Confirmar orden'];

const Ventas = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <OrderStateProvider>
      <div className={styles.ventas}>
        <header className={styles.header}>
          <h1 className={styles.title}>Nueva venta</h1>

          <Stepper
            className={styles.stepper}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            stepsList={stepsList}
          />
        </header>

        <SelectProducts
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[0] && styles.stepActive
          }`}
          title={
            <h2 className={styles.stepsList__title}>
              {stepsList[currentStep]}
            </h2>
          }
        />

        <ClientForm
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[1] && styles.stepActive
          }`}
          title={
            <h2 className={styles.stepsList__title}>
              {stepsList[currentStep]}
            </h2>
          }
        />

        <div
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[2] && styles.stepActive
          }`}
          title={
            <h2 className={styles.stepsList__title}>
              {stepsList[currentStep]}
            </h2>
          }
        >
          Step 3
        </div>

        <div className={styles.circle}>Circle</div>
      </div>
    </OrderStateProvider>
  );
};

export default Ventas;
