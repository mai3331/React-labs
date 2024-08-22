const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary mb-4">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <span className="navbar-brand mb-0 h1" style={{ color: "#FF1493" }}>
          Shop Now
        </span>
        <div className="d-flex">
          <span className="ms-3">Home</span>
          <span className="ms-3">Shop Now</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

