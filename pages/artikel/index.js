//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
import Link from "next/link"
import Keterangan from "../../components/keterangan";
//import Navbar from "../components/navbar";

const Artikel = (props) => (
  <section id="our-values" className="our-values">
    <div className="container">
      <MainLayout>
        <div className="section-title">
          <br />
          <h2>Portofolio</h2>
          <p>Berkah selalu mendokumentasikan setiap kegiatan yang diadakan, agar bisa menjadi portofolio dan bukti kerja yang real dan akurat serta menyajikan data terbaru. Berikut merupakan kilas balik bukti kegiatan Berkah : </p>
        </div>
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
        <Link
          href="/artikel/[kode]/[judul]"
          as="artikel/1/Kumpulan-Portofolio"
        >
          <center><a className="btn btn-primary">Lihat Semua Portofolio</a></center>
        </Link>
        <br />
        <br />
      </MainLayout>
    </div>
  </section>
)
export default Artikel;