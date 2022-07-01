const Validate = (value) => {
    const errors = {};
    if (!value.email) {
      errors.email = "Email is tequired";
    }
    if (!value.password) {
      errors.password = "Password is required";
    }
    return errors;
  };
  
  export default Validate;
  