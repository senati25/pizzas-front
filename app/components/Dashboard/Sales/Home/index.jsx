import { useState } from 'react';
import ContentLayout from '../../../shared/ContentLayout';
import HeaderPageDashboard from '../../../shared/HeaderPageDashboard';
import ClientForm from './ClientForm';
import ConfirmOrder from './ConfirmOrder';
import SelectProducts from './SelectProducts';
import Stepper from './SelectProducts/Stepper';
import { OrderStateProvider } from './shared/OrderContext';
import ShoppingCart from './ShoppingCart';
import styles from './styles.module.css';

const stepsList = ['Elegir Productos', 'Datos del Cliente', 'Confirmar orden'];

const Ventas = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <OrderStateProvider>
      <ContentLayout>
        <HeaderPageDashboard title="Nueva venta">
          <Stepper
            className={styles.stepper}
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            stepsList={stepsList}
          />
        </HeaderPageDashboard>

        <SelectProducts
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[0] && styles.stepActive
          }`}
          title={
            <>
              <h2 className={styles.stepsList__title}>
                {stepsList[currentStep]}
                <hr />
              </h2>
            </>
          }
        />
        <ClientForm
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[1] && styles.stepActive
          }`}
          title={
            <>
              <h2 className={styles.stepsList__title}>
                {stepsList[currentStep]}
                <hr />
              </h2>
            </>
          }
        />
        <ConfirmOrder
          className={`${styles.step} ${
            stepsList[currentStep] === stepsList[2] && styles.stepActive
          }`}
          title={
            <>
              <h2 className={styles.stepsList__title}>
                {stepsList[currentStep]}
                <hr />
              </h2>
            </>
          }
        />
        {currentStep !== 2 && (
          <ShoppingCart className={styles.shoppingCartList} />
        )}
      </ContentLayout>
    </OrderStateProvider>
  );
};

export default Ventas;
