/* eslint-disable react/prop-types */
const ErrorAlert = ({ children }) => {
  return <div className="alert alert-dismissible alert-danger">{children}</div>;
};

export default ErrorAlert;
