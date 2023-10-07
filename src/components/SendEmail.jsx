const SendEmail = () => {
  const submit = () => {};
  return (
    <>
      <div>
        <form onSubmit={submit}>
          <div className="col-10 col-md-8 col-lg-10 d-flex flex-column mx-auto bg-primary rounded p-2 mb-5">
            <div className="form-floating p-1 my-1">
              <input
                required
                type="text"
                className="form-control"
                id="name"
                placeholder="name"
              />
              <label htmlFor="name" className="ps-3">
                Name
              </label>
            </div>
            <div className="form-floating p-1 my-1">
              <input
                required
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="email" className="ps-3">
                Email
              </label>
            </div>
            <div className="form-floating p-1 my-auto form-group">
              <input
                required
                type="text"
                className="form-control"
                id="subject"
                placeholder="subject"
              />
              <label htmlFor="subject" className="ps-3">
                Subject
              </label>
            </div>
            <div className="form-floating p-1 my-auto form-group">
              <textarea
                className="form-control"
                type="text"
                id="message"
                placeholder="message"
                rows="5"
              ></textarea>
              <label htmlFor="message" className="ps-3">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-lg btn-dark col-6 mx-auto m-2"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default SendEmail;
