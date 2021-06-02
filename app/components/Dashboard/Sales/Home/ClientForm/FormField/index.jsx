import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.FormGroup}>
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`${styles.formControl} ${
          meta.touched && meta.error && styles.is__invalid
        }`}
        {...field}
        {...props}
        autoComplete="nope"
      />

      <ErrorMessage
        component="div"
        name={field.name}
        className={`${styles.error}`}
      />
    </div>
  );
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
};

export default FormField;
