//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
import Link from "next/link"
import List from "../../components/list-donatur"
import DataDonatur from "../../datasets/datadonatur.json"
//import Navbar from "../components/navbar";

export async function getServerSideProps(context) {
  return {
    props: { DataDonatur },
  };
}

const Donatur = (props) => (
  <MainLayout>
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <br />
          <br />
          <br />
          <h2>Donatur</h2>
          <p>Berkah selalu mendata siapa saja yang menjadi donatur didalamnya karena kegiatan kami tidak akan berjalan tanpa adanya sang donatur. Berikut merupakan list para pendonatur Berkah : </p>
        </div>
        <div className="row">
          {props.DataDonatur.map((donatur) => (
            <List
              kode={donatur.kode}
              nama={donatur.nama}
              address={donatur.address}
              email={donatur.email}
              jumlah={donatur.jumlah}
              bergabung={donatur.bergabung}
            />
          ))}
        </div>
        <br />
        <Link
          href="/donatur/[kode]/[nama]"
          as="donatur/semua/Kumpulan-Donatur"
        >
          <center><a className="btn btn-primary">Lihat Semua Donatur</a></center>
        </Link>
        <br />
        <br />
      </div>
    </section>
  </MainLayout>
)
export default Donatur;