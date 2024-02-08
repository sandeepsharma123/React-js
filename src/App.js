import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Features from "./Pages/Features";
import Team from "./Pages/Team";
import Testimonial from "./Pages/Testimonial";
import Error from "./Pages/Error";
import State from "./Pages/State";
import Sea from "./Pages/Sea";
import Api from "./Pages/Api";
import Product from "./Pages/Product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Index" element={<Home/>}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Contact" element={<Contact/>}></Route>
          <Route path="/Projects" element={<Projects/>}></Route>
          <Route path="/Features" element={<Features/>}></Route>
          <Route path="/Team" element={<Team/>}></Route>
          <Route path="/Testimonial" element={<Testimonial/>}></Route>
          <Route path="/*" element={<Error/>}></Route>
          <Route path="/State" element={<State/>}></Route>
          <Route path="/Sea" element={<Sea/>}></Route>
          <Route path="/Api" element={<Api/>}></Route>
          <Route path="/Product" element={<Product/>}></Route>
        </Routes>
        <Footer/>

       </Router>
        
     
      
    </>

    
  );
}

export default App;
