const NavBar = () => {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-1">
          <img
            src="../src/assets/split_logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-top"
          />
          Splitter
        </a>
        <i>
          <span className="navbar-text fs-6">the bill splitting helper</span>
        </i>

      </div>
    </nav>
  );
};

export default NavBar;
