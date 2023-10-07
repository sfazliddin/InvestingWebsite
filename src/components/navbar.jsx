// import "bootswatch/dist/zephyr/bootstrap.min.css";

import { RegisterButton, LoginButton } from "./buttons";

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h1>API Fun</h1>
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
              <a className="nav-link" href="/numbers-facts">
                Number Facts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/text2speech">
                Text 2 Speech
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/chuck-norris">
                Chuck Norris
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/urban-dictionary">
                Urban Dictionary
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

{
  /* <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Profile</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Contact</button>
  </li>
</ul> */
}
