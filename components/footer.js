const Footer = () => (
    <footer id="footer">

        <div className="footer-top">

            <div className="container">

                <div className="row  justify-content-center">
                    <div className="col-lg-6">
                        <i><h4>Bekerja Sama Dengan :</h4></i>
                        <br/>
                        <br/>
                    </div>
                </div>
        </div>
        <div id="testimonials" className="testimonials">
            <div className="container">
                <div className="testimonial-item">
                    
                    <img src="/img/lazisn.png" className="testimonial-img" alt="" />
                    <img src="/img/stikom.jpg" className="testimonial-img" alt="" />
                    <img src="/img/pantirgj.png" className="testimonial-img" alt="" />
                    
                </div>
            </div>
        </div>
        <div className="social-links">
        <a href="#" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="youtube"><i className="bi bi-youtube"></i></a>
                </div>

            </div>

        <div className="container footer-bottom clearfix">
            <div className="copyright">
                © Copyright <strong><span>BERKAH</span></strong> 2021
      </div>
            <div className="credits">
                Designed by <a href="https://bootstrapmade.com/">All Team Berkah</a>
            </div>
        </div>
    </footer>
)

export default Footer;