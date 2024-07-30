import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./Components/NavBarDesign/Navbar";
import Home from "./Components/NavBarDesign/Home";
import About from "./Components/About/About";
import Internship from "./Components/Internship/Internship";
import Footer from "./Components/NavBarDesign/Footer/Footer";
import Enquiryform from "./Components/Enquiry/Enquiryform";
import Contact from "./Components/Contact/Contact";
import Hireus from "./Components/HireUs/Hireus";
import Gallery from "./Components/Gallery/Gallery";
import Courses from "./Components/Courses/Courses";
import Python from "./Components/Courses/Course View/Python";
import Java from "./Components/Courses/Course View/Java";

function App() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/intern" element={<Internship></Internship>}></Route>
          <Route path="/enquire" element={<Enquiryform></Enquiryform>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/hireus" element={<Hireus></Hireus>}></Route>
          <Route path="/gallery" element={<Gallery></Gallery>}></Route>

          <Route path="/courses/python" element={<Python></Python>}></Route>
          <Route path="/courses/java" element={<Java></Java>}></Route>
        </Routes>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
