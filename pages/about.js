import Footer from "../components/footer";
import Navbar from "../components/navbar";

const About = () => (
  <section id="about" className="about">
    <div className="container">
      <Navbar />
      <br/>
      <div className="section-title">
        <h2>About Us</h2>
      </div>

      <div className="row content">
        <div className="col-lg-6">
          <h3>
            Visi
            </h3>
          <ul>
            <li><i className="ri-check-double-line"></i> Terwujudnya kesejahteraan sosial serta Meningkatkan rasa kepedulian antar sesama.</li>
          </ul>
          <h3>
            Misi
            </h3>
          <ul>
            <li><i className="ri-check-double-line"></i> Menghadirkan data yang autentik.</li>
            <li><i className="ri-check-double-line"></i> Memudahkan donatur dalam penyaluran donasi.</li>
            <li><i className="ri-check-double-line"></i> Menjalin kerja sama dengan lembaga-lembaga dan organisasi amil zakat.</li>
            <li><i className="ri-check-double-line"></i> Menjalin kerja sama dengan organisasi keagamaan.</li>
            <li><i className="ri-check-double-line"></i> Membangun system yang terkomputerisasi yang terintegrasi.</li>
          </ul>
        </div>
        <div className="col-lg-6 pt-4 pt-lg-0">
          <h3>
            Filosofi Logo
            </h3>
          <ul>
            <li><i className="ri-check-double-line"></i> Lingkaran hijau : Satu kesatuan yang tak pernah putus untuk mewujudkan harapan kebahagiaan dunia dan akhirat.</li>
            <li><i className="ri-check-double-line"></i> Kedua Tangan : Pengabdian bagi masyarakat untuk memenuhi harapan dan kebahagiaan dunia akhirat.</li>
            <li><i className="ri-check-double-line"></i> Padi Kuning : Berbagi (beramal) yang membawa kemakmuran, dan keadilan sosial sehingga dapat memuliakan sesama dan membawa kegembiraan.</li>
            <li><i className="ri-check-double-line"></i> Lima Bintang Emas : Berbagi (beramal) yang dilandasi dengan iman dan taqwa dalam rukun islam dan menjunjung tinggi nilai luhur untuk memperoleh keberkahan dunia dan akhirat.</li>
          </ul>
        </div>
      </div>
      <br/>
      <Footer />
    </div>
  </section>
)
export default About;