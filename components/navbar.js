const Navbar = () => (
  <header id="header" className="d-flex align-items-center fixed-top">
    <div className="container-fluid d-flex align-items-center justify-content-lg-between">

      <h1 className="logo me-auto me-lg-0"><a href="index.html">BERKAH</a></h1>

      <nav id="navbar" className="navbar order-last order-lg-0">
        <ul>
          <li><a className="nav-link scrollto" href="/">Home</a></li>
          <li><a className="nav-link scrollto" href="/donatur">Donatur</a></li>
          <li><a className="nav-link scrollto" href="/artikel">Portofolio</a></li>
          <li><a className="nav-link scrollto" href="/about">About</a></li>
          <li><a className="nav-link scrollto" href="/contact">Contact</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

      <div className="header-social-links d-flex align-items-center">
        <a href="#" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="youtube"><i className="bi bi-youtube"></i></a>
      </div>

    </div>
  </header>
)

export default Navbar;