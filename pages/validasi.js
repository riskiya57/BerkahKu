//import Footer from "../components/footer";
import MainLayout from "../components/main-layout";
//import Navbar from "../components/navbar";

const Validasi = () => (
    <MainLayout>
    <section id="contact" className="contact">
        <div className="container">
            <br />
            <div className="section-title">
                <h2>Silahkan Isi Form Berikut Untuk Melakukan Donasi :</h2>
            </div>
            <center>
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Nama / Instansi" required="" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Jumlah Donasi" required="" />
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Email/Whatsapp" required="" />
                        </div>
                        <div className="form-group mt-3">
                            <select className="form-control" name="subject" id="cars" >
                                <option value="Donasi Kepada">Donasi Kepada</option>
                                <option value="Kaum Duafa">Kaum Duafa</option>
                                <option value="Yatim Piatu">Yatim Piatu</option>
                                <option value="Janda Tua">Janda Tua</option>
                                <optgroup label="Panti Asuhan">
                                    <option value="Panti Asuhan A">Panti Asuhan A</option>
                                    <option value="Panti Asuhan B">Panti Asuhan B</option>
                                </optgroup>
                            </select>
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                            <select className="form-control" name="subject" id="cars" >
                                <option value="Donasi Kepada">Tranfer Via</option>
                                <option value="Kaum Duafa">Bank BRI</option>
                                <option value="Yatim Piatu">Bank BCA</option>
                                </select></div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="subject" className="form-control" name="subject" id="subject" placeholder="No. Rekening" required="" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows="5" placeholder="Keterangan Lain" required=""></textarea>
                        </div>
                        <div className="my-3">
                            <div className="loading">Loading</div>
                            <div className="error-message"></div>
                            <div className="sent-message">Terimakasih Telah Menjadi Donatur Kami.</div>
                        </div>
                        <div className="text-center"><button type="submit">Donasi</button></div>
                    </form>

                </div>
                <br />
            </center>
        </div>
    </section>
    </MainLayout>
)
export default Validasi;