import Header from "../header/Header";
import Footer from "../footer/Footer";
import CouresCard from "./CouresCard";
import Image1 from "./ccnp.png";
import Image2 from "./mbreparing.jpg";
import Image3 from './python.jpg'
import Image4 from './techno.jpg'

function Courses() {
      
        const cards = [
        {
          src : {Image1},
          title : "CCNP",
          discrp : ""
        },
        {
          src : {Image2},
          title : "MOBILE REPAIRING",
          discrp : ""
        },
        {
          src : {Image3},
          title : "PYTHON PROGRAMMING",
          discrp : ""
        }
      ]

  
  return (
       
        <>
          <Header/>
          <CouresCard src={cards[0].src}/>
          <CouresCard src={cards[1].src}/>
          <CouresCard src={cards[2].src}/>
          <Footer/>
        </>
    );
  }
  
  export default Courses;
  

  