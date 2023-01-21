import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button, Space } from 'antd';
import './nav.css'

function Navbar() {
    return (
       <Nav>
        <header>
        <div>
            <ul className="navbar">
                <li>
                    <NavLink className="a" to="/home">Home</NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink className="a" to="/courses">Courses</NavLink>
                </li>
                <li>
                    <NavLink className="a"  to="/contact">Contact</NavLink>
                </li>
                <li>
                    <Button type="primary" id="btn">DONATE NOW</Button>
                </li>
                
            </ul>
        </div>
        </header>
        
       </Nav>
       
    );
  }
  
  const Nav = styled.nav`
  padding:10px;
 
  .navbar-list{
    display:flex;
    gap: 2.5rem;
    margin-right:300px;
   
    
    li{

        list-style:none;

        .navbar-links{
            text-decoration:none;
            color:#181818;
            font-family: 'Roboto', sans-serif; 
        }
        
    }

    li a:hover{
        color:#0155ca;
       
    }

    #btn{
        margin-top:-4px;
    }
  
        
    }
    
    

  }
  `;
  export default Navbar;