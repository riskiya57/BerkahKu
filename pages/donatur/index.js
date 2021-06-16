//import Footer from "../components/footer";
import MainLayout from "../../components/main-layout";
import Link from "next/link"
import List from "../../components/list-donatur";
//import Navbar from "../components/navbar";

const Donatur = () => (

  <section id="services" className="services">
    <div className="container">
      <MainLayout>

        <div className="section-title">
          <br />
          <h2>Donatur</h2>
          <p>Berkah selalu mendata siapa saja yang menjadi donatur didalamnya karena kegiatan kami tidak akan berjalan tanpa adanya sang donatur. Berikut merupakan list para pendonatur Berkah : </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>

          <div className="col-lg-4 col-md-6 mt-4">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>
          <div className="col-lg-4 col-md-6 mt-4">
            <List
              nama="Eko Heri Susanto"
              address="jl. xxxxxxx"
              email="xxxxxx@gmail.com"
              jumlah="Rp.50.000;"
              bergabung="Tahun 2021"
            />
          </div>
        </div>
        <br />
        <Link
          href="/donatur/[kode]/[nama]"
          as="donatur/1/Kumpulan-Donatur"
        >
          <center><a className="btn btn-primary">Lihat Semua Donatur</a></center>
        </Link>
        <br />
        <br />
      </MainLayout>
    </div>
  </section>
)
export default Donatur;