//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
// import Link from "next/link"
import List from "../../components/list-donatur"
import DataDonatur from "../../datasets/datadonatur.json"
//import Navbar from "../components/navbar";

export async function getServerSideProps(context) {
  return {
    props: { DataDonatur },
  };
}

const Donaturall = (props) => (
  <MainLayout>
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <br />
          <br />
          <br />
          <h2>Donatur</h2>
          <p>Berikut Merupakan Daftar Seluruh Donatur Berkah : </p>
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
      </div>
    </section>
  </MainLayout>
)
export default Donaturall;