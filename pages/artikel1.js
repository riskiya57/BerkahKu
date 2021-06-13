//import Footer from "../components/footer";
import MainLayout from "../components/main-layout";
//import Navbar from "../components/navbar";

const Artikel1 = (props) => (
  <section id="our-values" className="our-values">
    <div className="container">
      <MainLayout>
      <div className="section-title">
        <br />
        <h2>Portofolio</h2>
        <p>Berkah selalu mendokumentasikan setiap kegiatan yang diadakan, agar bisa menjadi portofolio dan bukti kerja yang real dan akurat serta menyajikan data terbaru. Berikut merupakan kilas balik bukti kegiatan Berkah : </p>
      </div>
      <section id="portfolio" class="portfolio">
        <div class="container">
          <ul id="portfolio-flters" className="d-flex justify-content-center">
          <li><a href="/artikel" >1</a></li>
            <li><a href="/artikel1">2</a></li>
            <li><a href="/artikel2">3</a></li>
            <li><a href="/artikelall">All</a></li>
          </ul>
        </div>
      </section>

      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <div className="card">
            <img src="/img/bukti1.jpg" className="card-img" alt="" />
            <div className="card-body">
              <h5 className="card-title"><a href="">Pembagian Sembako</a></h5>
              <p className="card-text"><ul>
                <li><i className="ri-check-double-line"></i> Nama penerima :</li>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Tanggal Kegiatan :</li>
                <li><i className="ri-check-double-line"></i> Keterangan :</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <div className="card">
            <img src="/img/bukti2.jpg" className="card-img" alt="" />
            <div className="card-body">
              <h5 className="card-title"><a href="">Pembagian Sembako</a></h5>
              <p className="card-text"><ul>
                <li><i className="ri-check-double-line"></i> Nama penerima :</li>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Tanggal Kegiatan :</li>
                <li><i className="ri-check-double-line"></i> Keterangan :</li>
              </ul>
              </p>
            </div>
          </div>

        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <div className="card">
            <img src="/img/bukti6.jpg" className="card-img" alt="" />
            <div className="card-body">
              <h5 className="card-title"><a href="">Pembagian Sembako Bersama LazisNU</a></h5>
              <p className="card-text"><ul>
                <li><i className="ri-check-double-line"></i> Nama penerima :</li>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Tanggal Kegiatan :</li>
                <li><i className="ri-check-double-line"></i> Keterangan :</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <div className="card">
            <img src="/img/bukti7.jpg" className="card-img" alt="" />
            <div className="card-body">
              <h5 className="card-title"><a href="">Pembagian Sembako Bersama LazisNU</a></h5>
              <p className="card-text"><ul>
                <li><i className="ri-check-double-line"></i> Nama penerima :</li>
                <li><i className="ri-check-double-line"></i> Alamat :</li>
                <li><i className="ri-check-double-line"></i> Tanggal Kegiatan :</li>
                <li><i className="ri-check-double-line"></i> Keterangan :</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <br/>
      </MainLayout>
    </div>
  </section>
)
export default Artikel1;