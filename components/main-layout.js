import Footer from "./footer"; 
import Navbar from "./navbar"; 
 
const MainLayout = (props) => (     
<div className="container">         
<Navbar />         
{props.children}         
<Footer />     
</div> ); 
 
export default MainLayout; 