//import Footer from "../components/footer";
// import Link from "next/link"
//import MainLayout from "../../../components/main-layout";
import List from "../../components/list-donatur";
//import Navbar from "../components/navbar";

const Donaturall = () => (

  <section id="services" className="services">
    <div className="container">
        {/* <MainLayout> */}
     <div className="row">
        <div className="col-lg-4 col-md-6">
         <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mt-md-0">
        <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>
        <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
        <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>

        <div className="col-lg-4 col-md-6 mt-4">
        <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>
        <div className="col-lg-4 col-md-6 mt-4">
        <List
          nama  ="Eko Heri Susanto"
          address ="jl. xxxxxxx"
          email ="xxxxxx@gmail.com"
          jumlah ="Rp.50.000;"
          bergabung ="Tahun 2021"
         />
        </div>
      </div>
      <br />
      {/* </MainLayout> */}
    </div>
  </section>
)
export default Donaturall;