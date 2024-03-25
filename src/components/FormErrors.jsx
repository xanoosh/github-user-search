import PropTypes from 'prop-types';

function FormErrors({ errors }) {
  console.log('errors:', errors);
  return (
    <div className="form__group__errors">
      {Object.keys(errors).length
        ? Object.values(errors).map((error, i) => (
            <span key={i}>{error.message}</span>
          ))
        : null}
    </div>
  );
}

FormErrors.propTypes = {
  errors: PropTypes.shape({
    message: PropTypes.string,
  }),
};

export default FormErrors;
