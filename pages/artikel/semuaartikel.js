//import Footer from "../components/footer";
// import MainLayout from "../../../components/main-layout";
// import Link from "next/link"
import Keterangan from "../../components/keterangan";
//import Navbar from "../components/navbar";

const Artikelall = () => (
  <section id="our-values" className="our-values">
    <div className="container">
      {/* <MainLayout> */}
      {/* <div className="section-title">
          <br />
          <h2>Kumpulan Portofolio Berkah</h2>
          </div> */}
      <div className="row">
        <div className="col-md-6 d-flex align-items-stretch">
          <Keterangan
            gambar="/img/bukti1.jpg"
            judul="Pembagian Sembako"
            namapnrm="Ibu Mis"
            alamat="jl. xxxxxxx"
            tanggal="24 Maret 2021"
            keterangan="Janda Tua"
          />
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
          <Keterangan
            gambar="/img/bukti2.jpg"
            judul="Pembagian Sembako"
            namapnrm="Bapak Kholiq"
            alamat="jl. xxxxxxx"
            tanggal="24 Maret 2021"
            keterangan="Kaum Dhuafa"
          />
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <Keterangan
            gambar="/img/bukti6.jpg"
            judul="Pembagian Sembako Bersama LazisNu"
            namapnrm="xxxxxxxxxxxxx"
            alamat="jl. xxxxxxx"
            tanggal="24 Maret 2021"
            keterangan="Janda Tua"
          />
        </div>
        <div className="col-md-6 d-flex align-items-stretch mt-4">
          <Keterangan
            gambar="/img/bukti7.jpg"
            judul="Pembagian Sembako Bersama LazisNu"
            namapnrm="xxxxxxxxxxxxx"
            alamat="jl. xxxxxxx"
            tanggal="24 Maret 2021"
            keterangan="Janda Tua"
          />
        </div>
      </div>
      <br />
      {/* </MainLayout> */}
    </div>
  </section>
)
export default Artikelall;