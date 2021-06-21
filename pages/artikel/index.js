//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
import Link from "next/link"
import Keterangan from "../../components/keterangan";
import ListArtikel from "../../datasets/dataartikel.json"
//import Navbar from "../components/navbar";

export async function getServerSideProps(context) {
  return {
    props: { ListArtikel },
  };
}


const Artikel = (props) => (
  <MainLayout>
    <section id="our-values" className="our-values">
      <div className="container">
        <div className="section-title">
          <br />
          <h2>Portofolio</h2>
          <p>Berkah selalu mendokumentasikan setiap kegiatan yang diadakan, agar bisa menjadi portofolio dan bukti kerja yang real dan akurat serta menyajikan data terbaru. Berikut merupakan kilas balik bukti kegiatan Berkah : </p>
        </div>
        <div className="row">
          {props.ListArtikel.map((artikel) => (
            <Keterangan
              id={artikel.id}
              gambar={artikel.gambar}
              judul={artikel.judul}
              namapnrm={artikel.namapnrm}
              alamat={artikel.alamat}
              tanggal={artikel.tanggal}
              keterangan={artikel.keterangan}
            />
          ))}
        </div>
        <br />
        <Link
          href="../artikel/semuaartikel"
        >
          <center><a className="btn btn-primary">Lihat Semua Portofolio</a></center>
        </Link>
        <br />
        <br />
      </div>
    </section>
  </MainLayout>
)
export default Artikel;