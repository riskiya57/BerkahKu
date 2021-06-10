import Navbar from "../components/navbar"
import Banner from "../components/banner"
import Footer from "../components/footer"
import About from "../components/about";
import Contact from "../components/contact";
const Home = (props) => (
  <div className = "container">
    <Navbar/>
    <Banner/>
    <About/>
    <Contact/>
    <Footer/>
</div>
)

export default Home;