//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
// import Link from "next/link"
import Keterangan from "../../components/keterangan";
import ListArtikel from "../../datasets/dataartikel.json"
//import Navbar from "../components/navbar";

export async function getServerSideProps(context) {
  return {
    props: { ListArtikel },
  };
}


const Artikelall = (props) => (
  <MainLayout>
    <section id="our-values" className="our-values">
      <div className="container">
        <div className="section-title">
          <br />
          <h2>Portofolio</h2>
          <p>Berikut Merupakan Kumpulan Portofolio Kegiatan Yang Sudah Dilakukan Oleh Berkah : </p>
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
      </div>
    </section>
  </MainLayout>
)
export default Artikelall;