import Link from "next/link"
const Banner = () => (
  <section id="hero">
    <div className="hero-container">
      <br />
      <br />
      <br />
      <h1>Welcome to BERKAH</h1>
      <h2>Bersama Menggapai Barokah dengan Bersedekah</h2>
      <Link href="/validasi">
        <a className="btn-get-started scrollto">Ayo Donasi</a>
      </Link>
    </div>
  </section>
)

export default Banner;