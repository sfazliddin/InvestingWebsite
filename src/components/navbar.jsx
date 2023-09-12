// import "bootswatch/dist/zephyr/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { RegisterButton, LoginButton } from "./buttons";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h1>Invest IQ</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/stocks">
                Stocks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/crypto">
                Crypto
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/support">
                Support
              </a>
            </li>
          </ul>

          <LoginButton />
          <RegisterButton />
        </div>
      </div>
    </nav>
  );
};
export default MyNavbar;
