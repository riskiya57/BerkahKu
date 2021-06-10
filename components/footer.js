const Footer = () => (
    <footer id="footer">

        <div className="footer-top">

            <div className="container">

                <div className="row  justify-content-center">
                    <div className="col-lg-6">
                        <h2>Telah Bekerja Sama :</h2>
                        <p>Menjadi Wadah Para Donatur Untuk Menyalurkan Bantuannya Terhadap Masyarakat Yang Membutuhkan .</p>
                    </div>
                </div>
                <div id="testimonials" className="testimonials">
                    <div className="container">

                        <div className="testimonials-slider swiper-container" data-aos="fade-up" data-aos-delay="100">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                                        </p>
                                        <img src="/img/Logo Laziz NU.jpg" className="testimonial-img" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-bottom clearfix">
      <div className="copyright">
        &copy; Copyright <strong><span>Berkah</span></strong>. 2021
      </div>
      <div className="credits">
        Designed by <a href="https://bootstrapmade.com/">Berkah</a>
      </div>
            </div>
        </div>
        </div>
    </footer>
)

export default Footer;