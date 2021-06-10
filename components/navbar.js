const Navbar =() => (
    <header id="header" className="d-flex align-items-center">
    <div className="container-fluid d-flex align-items-center justify-content-lg-between">
        
      <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
        <span>
            <h1 className="logo me-auto me-lg-0"><a href="index.html">BERKAH</a></h1>
        </span>
        {/* <ul> */}
          <li><a className="nav-link scrollto " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#services">Donatur</a></li>
          <li><a className="nav-link scrollto" href="#portfolio">Artikel</a></li>
          <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
        {/* </ul> */}
        <i className="bi mobile-nav-toggle bi-list"></i>
      
      <div className="header-social-links d-flex align-items-center">
        <ul>
        <li><a href="#" className="facebook"><i className="fab fa-facebook fa-fw"></i></a></li>
        <li><a href="#" className="instagram"><i className="fab fa-instagram fa-fw"></i></a></li>
        <li><a href="#" className="youtube"><i className="fab fa-youtube fa-fw"></i></a></li>
        </ul>
      </div>
      </ul>
      </nav>
      </div>
      </header>
)

export default Navbar;