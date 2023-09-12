/* eslint-disable react/prop-types */
const Container = ({ children, className }) => {
  return (
    <section className={`mx-auto max-w-7xl px-4 py-5 ${className}`}>
      <div className="row">
        <div className="mx-auto col-10 col-md-8 col-lg-6">{children}</div>
      </div>
    </section>
  );
};

Container.defaultProps = {
  className: "",
};

export default Container;
