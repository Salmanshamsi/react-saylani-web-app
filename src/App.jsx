import Login from './components/login/Login'
import Home from "./components/home/Home";
import About from "./components/about/About";
import Courses from "./components/courses/Courses";
// import Gallary from "./components/gallary/Gallary";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css"


import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div>
      
     <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/courses" element={<Courses/>}/>
          {/* <Route path="/gallary" element={<Gallary/>}/> */}
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
