const Validate = (value) => {
  const errors = {};
  if (!value.username) {
    errors.username = "Username is required";
  }
  if (!value.first_name) {
    errors.first_name = "First Name is required";
  }
  if (!value.password) {
    errors.password = "Nama Lengkap is required";
  }
  if (!value.last_name) {
    errors.last_name = "Level is required";
  }
  return errors;
};

export default Validate;
