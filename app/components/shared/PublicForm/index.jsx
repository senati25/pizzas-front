import PropTypes, { array, object } from 'prop-types';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import Spinner from '../Spinner';
import styles from './styles.module.css';

const PublicForm = ({ children, isLoading, ...props }) => (
  <div className={styles.form__container}>
    <Formik {...props}>
      {(formik) => {
        const [submitDisabled, setSubmitDisabled] = useState(true);

        useEffect(() => {
          props.validationSchema
            .isValid(formik.values)
            .then((isValid) => setSubmitDisabled(!isValid));
        }, [formik.values]);

        if (isLoading) return <Spinner />;

        return (
          <Form className={styles.form}>
            {children}

            <button
              className={styles.form__button}
              disabled={submitDisabled}
              type="submit"
            >
              Registrarse
            </button>
          </Form>
        );
      }}
    </Formik>
  </div>
);

PublicForm.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([array, object]).isRequired,
  validationSchema: PropTypes.oneOfType([object]).isRequired,
};

export default PublicForm;
