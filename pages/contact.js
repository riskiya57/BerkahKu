//import Footer from "../components/footer";
import MainLayout from "../components/main-layout";
//import Navbar from "../components/navbar";

const Contact = () => (
  <section id="contact" className="contact">
    <div className="container">
      <MainLayout>
      <br/>
      <div className="section-title">
        <h2>Contact</h2>
        <p>Silahkan Hubungi kami jika ada yang ingin ditanyakan :</p>
      </div>

      <div className="row mt-5">

        <div className="col-lg-4">
          <div className="info">
            <div className="address">
              <i className="bi bi-geo-alt"></i>
              <h4>Lokasi:</h4>
              <p>Jl. Jenderal Ahmad Yani No.80, Taman Baru, Kec. Banyuwangi, Kabupaten Banyuwangi, Jawa Timur 68416</p>
            </div>

            <div className="email">
              <i className="bi bi-envelope"></i>
              <h4>Email:</h4>
              <p>berkahstartup174@gmail.com</p>
            </div>

            <div className="phone">
              <i className="bi bi-phone"></i>
              <h4>Telephon:</h4>
              <p>+62 821 4290 9239</p>
            </div>

          </div>

        </div>

        <div className="col-lg-8 mt-5 mt-lg-0">

          <form action="forms/contact.php" method="post" role="form" className="php-email-form">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Nama" required="" />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Email" required="" />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required="" />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows="5" placeholder="Message" required=""></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center"><button type="submit">Kirim Pesan</button></div>
          </form>

        </div>

      </div>
      <br/>
      </MainLayout>
    </div>
  </section>
)
export default Contact;