//import Footer from "../components/footer";
import MainLayout from "../components/main-layout";
import Link from "next/link"
//import Navbar from "../components/navbar";

const Donaturall = (props) => (

  <section id="services" className="services">
    <div className="container">
      <MainLayout>

      <div className="section-title">
        <br />
        <h2>Donatur all</h2>
        <p>Berkah selalu mendata siapa saja yang menjadi donatur didalamnya karena kegiatan kami tidak akan berjalan tanpa adanya sang donatur. Berikut merupakan list para pendonatur Berkah : </p>
      </div>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <ul id="portfolio-flters" className="d-flex justify-content-center">
          <li>
                <Link href="/donatur">
                  <a>1</a>
                </Link>
              </li>
              <li>
                <Link href="/donatur1">
                  <a>2</a>
                </Link>
              </li>
              <li>
                <Link href="/donatur2">
                  <a>3</a>
                </Link>
              </li>
              <li>
                <Link href="/donaturall">
                  <a>all</a>
                </Link>
              </li>
          </ul>
        </div>
      </section>
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
          <div className="icon-box">
            <div className="icon"><i className="bi bi-card-checklist"></i></div>
            <h4 className="title"><a href="">Eko Heri Susanto</a></h4>
            <p className="description">
              <ul>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Email :</li>
                <li><i className="ri-check-double-line"></i> Jumlah :</li>
                <li><i className="ri-check-double-line"></i> Bergabung sejak :</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <br />
      </MainLayout>
    </div>
  </section>
)
export default Donaturall;