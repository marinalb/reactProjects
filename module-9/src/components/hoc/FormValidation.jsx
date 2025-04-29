import React, { useState } from 'react';

const withFormValidation = (WrappedComponent, validate) => {
  return (props) => {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const validationErrors = validate(formData);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        setIsSubmitted(true);
      }
    };

    return (
      <WrappedComponent
        {...props}
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isSubmitted={isSubmitted}
      />
    );
  };
};

export default withFormValidation;
